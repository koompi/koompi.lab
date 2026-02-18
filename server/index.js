import express from 'express'
import crypto from 'crypto'
import { MongoClient, ObjectId } from 'mongodb'
import dotenv from 'dotenv'
import multer from 'multer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/labkoompi'

// Multer config for file upload (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv') || file.mimetype === 'application/vnd.ms-excel') {
      cb(null, true)
    } else {
      cb(new Error('Only CSV files are allowed'))
    }
  },
})

// Middleware
app.use(express.json())

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// MongoDB Connection
let db
let schoolsCollection
let donationsCollection

async function connectDB() {
  const client = new MongoClient(MONGO_URI)
  try {
    await client.connect()
    db = client.db('labkoompi')
    schoolsCollection = db.collection('schools')
    donationsCollection = db.collection('donations')
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

connectDB()

// Helper: AES-256-CBC Encryption for Baray
function encryptPayload(payload, sk, iv) {
  const key = Buffer.from(sk, 'base64')
  const ivBuffer = Buffer.from(iv, 'base64')
  const cipher = crypto.createCipheriv('aes-256-cbc', key, ivBuffer)

  let encrypted = cipher.update(JSON.stringify(payload), 'utf8')
  encrypted = Buffer.concat([encrypted, cipher.final()])

  return encrypted.toString('base64')
}

// Helper: Decrypt webhook payload
function decryptOrderId(encryptedOrderId, sk, iv) {
  const key = Buffer.from(sk, 'base64')
  const ivBuffer = Buffer.from(iv, 'base64')
  const encryptedData = Buffer.from(encryptedOrderId, 'base64')

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, ivBuffer)
  let decrypted = decipher.update(encryptedData)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString('utf8')
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Get all schools
app.get('/api/schools', async (req, res) => {
  try {
    const { province, status } = req.query
    const filter = {}
    if (province) filter.province = province
    if (status) filter.status = status

    const schools = await schoolsCollection.find(filter).toArray()
    res.json(schools)
  } catch (error) {
    console.error('Error fetching schools:', error)
    // Return mock data for development
    res.json(getMockSchools())
  }
})

// Get single school
app.get('/api/schools/:id', async (req, res) => {
  try {
    const school = await schoolsCollection.findOne({ _id: req.params.id })
    if (!school) {
      return res.status(404).json({ error: 'School not found' })
    }
    res.json(school)
  } catch (error) {
    console.error('Error fetching school:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get impact stats
app.get('/api/stats/impact', async (req, res) => {
  try {
    const stats = await db.collection('impactStats').findOne({ _id: 'current' })
    if (!stats) {
      return res.json({
        // Cambodia Context
        totalSchoolsInCambodia: 14522, // 8,067 primary + 1,340 secondary (public data)
        prioritySchoolsTarget: 1743, // MoEYS priority list
        totalDonors: 142,
        schoolsEquipped: 65,
        studentsReached: 12000,
        totalAmount: 780000,
        remainingToEquip: 1678, // 1,743 - 65
      })
    }
    res.json(stats)
  } catch (error) {
    console.error('Error fetching stats:', error)
    res.json({
      totalSchoolsInCambodia: 14522,
      prioritySchoolsTarget: 1743,
      totalDonors: 142,
      schoolsEquipped: 65,
      studentsReached: 12000,
      totalAmount: 780000,
      remainingToEquip: 1678,
    })
  }
})

// Get provinces list
app.get('/api/provinces', (req, res) => {
  const provinces = [
    { id: 'phnom-penh', name: 'Phnom Penh', schoolCount: 180, fundedCount: 65 },
    { id: 'siem-reap', name: 'Siem Reap', schoolCount: 152, fundedCount: 42 },
    { id: 'battambang', name: 'Battambang', schoolCount: 168, fundedCount: 52 },
    { id: 'preah-sihanouk', name: 'Preah Sihanouk', schoolCount: 72, fundedCount: 28 },
    { id: 'kampong-cham', name: 'Kampong Cham', schoolCount: 208, fundedCount: 68 },
    { id: 'takeo', name: 'Takeo', schoolCount: 128, fundedCount: 45 },
    { id: 'kandal', name: 'Kandal', schoolCount: 160, fundedCount: 58 },
    { id: 'prey-veng', name: 'Prey Veng', schoolCount: 192, fundedCount: 55 },
    { id: 'svay-rieng', name: 'Svay Rieng', schoolCount: 100, fundedCount: 32 },
    { id: 'kampong-speu', name: 'Kampong Speu', schoolCount: 112, fundedCount: 35 },
    { id: 'kampong-chhnang', name: 'Kampong Chhnang', schoolCount: 96, fundedCount: 30 },
    { id: 'kampong-thom', name: 'Kampong Thom', schoolCount: 140, fundedCount: 38 },
    { id: 'kratie', name: 'Kratie', schoolCount: 72, fundedCount: 18 },
    { id: 'mondulkiri', name: 'Mondulkiri', schoolCount: 48, fundedCount: 8 },
    { id: 'ratanakiri', name: 'Ratanakiri', schoolCount: 60, fundedCount: 10 },
    { id: 'stung-treng', name: 'Stung Treng', schoolCount: 40, fundedCount: 7 },
    { id: 'preah-vihear', name: 'Preah Vihear', schoolCount: 56, fundedCount: 14 },
    { id: 'oddar-meanchey', name: 'Oddar Meanchey', schoolCount: 48, fundedCount: 9 },
    { id: 'banteay-meanchey', name: 'Banteay Meanchey', schoolCount: 80, fundedCount: 22 },
    { id: 'pailin', name: 'Pailin', schoolCount: 32, fundedCount: 10 },
    { id: 'pursat', name: 'Pursat', schoolCount: 100, fundedCount: 38 },
    { id: 'kampot', name: 'Kampot', schoolCount: 88, fundedCount: 28 },
    { id: 'kep', name: 'Kep', schoolCount: 32, fundedCount: 12 },
    { id: 'tbong-khmum', name: 'Tbong Khmum', schoolCount: 120, fundedCount: 40 },
  ]
  res.json(provinces)
})

// Submit community school request
app.post('/api/schools/submit', async (req, res) => {
  try {
    const submission = {
      ...req.body,
      _id: `community-${Date.now()}`,
      verificationStatus: 'pending', // pending | verified | rejected
      source: 'community',
      createdAt: new Date(),
    }

    // Store in separate collection for review
    await db.collection('communitySubmissions').insertOne(submission)

    console.log(`Community submission: ${submission.schoolName} in ${submission.province}`)

    res.json({
      success: true,
      message: 'School submitted for verification. We will review and add it to our list.',
    })
  } catch (error) {
    console.error('Submission error:', error)
    res.status(500).json({ error: 'Submission failed' })
  }
})

// Get community submitted schools (pending verification)
app.get('/api/schools/community', async (req, res) => {
  try {
    const submissions = await db.collection('communitySubmissions')
      .find({ verificationStatus: { $in: ['pending', 'verified'] } })
      .toArray()

    // Map to school format
    const schools = submissions.map((s) => ({
      _id: s._id,
      name: s.schoolName,
      province: s.province,
      district: s.district,
      studentCount: parseInt(s.studentCount) || 0,
      status: 'none',
      fundedPercentage: 0,
      source: 'community',
      verificationStatus: s.verificationStatus,
      needs: s.currentNeeds || [],
      createdAt: s.createdAt,
    }))

    res.json(schools)
  } catch (error) {
    console.error('Error fetching community schools:', error)
    res.json([])
  }
})

// Create payment intent with Baray
app.post('/api/pay', async (req, res) => {
  try {
    const { amount, currency, schoolId, schoolName, donorInfo } = req.body

    if (!amount || !schoolId) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Check if Baray credentials are configured
    const apiKey = process.env.BARAY_API_KEY
    const sk = process.env.BARAY_SK
    const iv = process.env.BARAY_IV

    if (!apiKey || !sk || !iv) {
      return res.status(500).json({
        error: 'Payment gateway not configured. Please add BARAY_API_KEY, BARAY_SK, and BARAY_IV to environment.'
      })
    }

    // Generate unique order ID
    const orderId = `SCHOOL-${schoolId}-${Date.now()}`

    // Prepare payload for Baray
    const payload = {
      amount: amount.toString(),
      currency: currency || 'USD',
      order_id: orderId,
      tracking: {
        schoolId,
        schoolName,
        donorName: donorInfo?.name || '',
        donorEmail: donorInfo?.email || '',
      },
      custom_success_url: `${process.env.BASE_URL}/payment/success`,
    }

    // Encrypt payload
    const encryptedData = encryptPayload(payload, sk, iv)

    // Call Baray API
    const barayResponse = await fetch('https://api.baray.io/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({ data: encryptedData }),
    })

    const barayData = await barayResponse.json()

    if (!barayResponse.ok) {
      console.error('Baray API error:', barayData)
      return res.status(500).json({ error: 'Payment gateway error' })
    }

    // Save donation intent to database
    await donationsCollection.insertOne({
      orderId,
      schoolId,
      amount: parseFloat(amount),
      donorInfo,
      intentId: barayData._id,
      status: 'pending',
      createdAt: new Date(),
    })

    // Return intent ID for redirect
    res.json({
      intent_id: barayData._id,
      order_id: orderId,
    })
  } catch (error) {
    console.error('Payment error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Baray webhook handler
app.post('/webhook/baray', async (req, res) => {
  try {
    const { encrypted_order_id, bank } = req.body

    if (!encrypted_order_id) {
      return res.status(400).json({ error: 'Missing encrypted_order_id' })
    }

    const sk = process.env.BARAY_SK
    const iv = process.env.BARAY_IV

    if (!sk || !iv) {
      console.error('Baray credentials not configured')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    // Decrypt order_id
    const orderId = decryptOrderId(encrypted_order_id, sk, iv)

    console.log(`Payment received: ${orderId} via ${bank}`)

    // Update donation status
    const result = await donationsCollection.updateOne(
      { orderId },
      {
        $set: {
          status: 'completed',
          bank,
          completedAt: new Date(),
        },
      }
    )

    if (result.matchedCount > 0) {
      const donation = await donationsCollection.findOne({ orderId })

      // Update school funded percentage
      if (donation) {
        await schoolsCollection.updateOne(
          { _id: donation.schoolId },
          {
            $inc: {
              fundedPercentage: Math.round((donation.amount / 12000) * 100),
            },
          }
        )
      }
    }

    res.status(200).send('OK')
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: 'Webhook processing failed' })
  }
})

// CSV Import - Parse and validate CSV file
app.post('/api/admin/import/csv/parse', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    const csvContent = req.file.buffer.toString('utf-8')
    const lines = csvContent.split('\n').filter(line => line.trim())

    if (lines.length < 2) {
      return res.status(400).json({ error: 'CSV file is empty or has no data rows' })
    }

    // Parse header
    const headers = parseCSVLine(lines[0])
    const normalizedHeaders = headers.map(h => h.toLowerCase().trim().replace(/[^a-z0-9]/g, '_'))

    // Validate required columns
    const requiredColumns = ['name', 'province']
    const missingColumns = requiredColumns.filter(col =>
      !normalizedHeaders.some(h => h.includes(col))
    )

    if (missingColumns.length > 0) {
      return res.status(400).json({
        error: `Missing required columns: ${missingColumns.join(', ')}`,
        foundHeaders: headers,
        requiredColumns: ['School Name', 'Province', 'District (optional)', 'Student Count (optional)', 'Status (optional)', 'Has Lab (optional)', 'Has Content Server (optional)', 'Has Solar (optional)']
      })
    }

    // Create column index map
    const colMap = {}
    headers.forEach((h, i) => {
      const normalized = h.toLowerCase().trim().replace(/[^a-z0-9]/g, '_')
      colMap[normalized] = i
    })

    // Parse data rows
    const schools = []
    const errors = []
    const warnings = []

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i])
      if (values.length < 2) continue // Skip empty rows

      const row = { rowNum: i + 1 }

      // Extract values using column map
      for (const [normalized, idx] of Object.entries(colMap)) {
        row[normalized] = values[idx]?.trim() || ''
      }

      // Validation
      const name = row.name || row.school_name || ''
      const province = row.province || ''

      if (!name) {
        errors.push({ row: i + 1, message: 'Missing school name' })
        continue
      }

      if (!province) {
        errors.push({ row: i + 1, message: 'Missing province', school: name })
        continue
      }

      // Parse student count
      let studentCount = 0
      if (row.student_count || row.students) {
        studentCount = parseInt(String(row.student_count || row.students).replace(/,/g, '')) || 0
      }
      if (studentCount <= 0) {
        studentCount = 500 // Default estimate
        warnings.push({ row: i + 1, message: `Using default student count: ${studentCount}` })
      }

      // Determine status from various possible columns
      let status = 'none'
      const hasLab = row.has_lab || row.lab || row.labs === 'yes' || row.labs === 'true'
      const hasContent = row.has_content_server || row.content_server || row.content === 'yes' || row.content === 'true'
      const hasSolar = row.has_solar || row.solar_power || row.solar === 'yes' || row.solar === 'true'

      if (hasSolar && hasLab && hasContent) {
        status = 'full-solar'
      } else if (hasLab && hasContent) {
        status = 'lab-content'
      } else if (hasLab) {
        status = 'lab'
      }

      // Also check explicit status column
      if (row.status) {
        const s = String(row.status).toLowerCase().trim()
        if (s.includes('solar') || s.includes('full')) {
          status = 'full-solar'
        } else if (s.includes('content')) {
          status = 'lab-content'
        } else if (s.includes('lab')) {
          status = 'lab'
        }
      }

      // Generate a unique ID
      const id = `moeys-${province.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i}`

      schools.push({
        _id: id,
        name: name,
        province: province,
        district: row.district || row.district_name || '',
        studentCount: studentCount,
        status: status,
        fundedPercentage: status !== 'none' ? 100 : 0,
        source: 'moeys',
        verificationStatus: 'verified',
        // Preserve original data for reference
        rawData: {
          hasLab: !!hasLab,
          hasContentServer: !!hasContent,
          hasSolar: !!hasSolar,
        },
        createdAt: new Date(),
      })
    }

    // Check for duplicates
    const duplicateNames = new Set()
    const seen = new Map()
    schools.forEach(school => {
      const key = `${school.province}:${school.name.toLowerCase()}`
      if (seen.has(key)) {
        duplicateNames.add(school.name)
      }
      seen.set(key, true)
    })

    if (duplicateNames.size > 0) {
      warnings.push({
        message: `Found ${duplicateNames.size} potential duplicate school name(s)`,
        duplicates: Array.from(duplicateNames).slice(0, 10)
      })
    }

    res.json({
      success: true,
      summary: {
        totalRows: lines.length - 1,
        validSchools: schools.length,
        errors: errors.length,
        warnings: warnings.length,
      },
      schools: schools.slice(0, 100), // Return first 100 for preview
      previewTotal: schools.length,
      errors: errors.slice(0, 50), // Limit error display
      warnings: warnings.slice(0, 20),
      hasMore: schools.length > 100,
    })
  } catch (error) {
    console.error('CSV parse error:', error)
    res.status(500).json({ error: 'Failed to parse CSV file', details: error.message })
  }
})

// CSV Import - Confirm and import to database
app.post('/api/admin/import/csv/confirm', async (req, res) => {
  try {
    const { schools } = req.body

    if (!schools || !Array.isArray(schools) || schools.length === 0) {
      return res.status(400).json({ error: 'No schools to import' })
    }

    // Check for existing schools by name and province
    const existing = await schoolsCollection.find({
      $or: schools.map(s => ({ name: s.name, province: s.province }))
    }).toArray()

    const existingMap = new Map(
      existing.map(s => `${s.province}:${s.name.toLowerCase()}`)
    )

    // Filter out duplicates
    const newSchools = schools.filter(s =>
      !existingMap.has(`${s.province}:${s.name.toLowerCase()}`)
    )

    const duplicateCount = schools.length - newSchools.length

    // Insert new schools
    if (newSchools.length > 0) {
      await schoolsCollection.insertMany(newSchools)
    }

    // Update impact stats
    await db.collection('impactStats').updateOne(
      { _id: 'current' },
      {
        $inc: { schoolsEquipped: newSchools.filter(s => s.status !== 'none').length }
      }
    )

    res.json({
      success: true,
      imported: newSchools.length,
      skipped: duplicateCount,
      message: `Successfully imported ${newSchools.length} schools${duplicateCount > 0 ? ` (skipped ${duplicateCount} duplicates)` : ''}`,
    })
  } catch (error) {
    console.error('CSV import error:', error)
    res.status(500).json({ error: 'Failed to import schools', details: error.message })
  }
})

// CSV Import - Get template
app.get('/api/admin/import/csv/template', (req, res) => {
  const template = `School Name,Province,District,Student Count,Has Lab,Has Content Server,Has Solar Power,Status
Phnom Penh Primary School,Phnom Penh,Chamkar Mon,450,Yes,Yes,No,Lab + Content
Siem Reap High School,Siem Reap,Angkor Thom,800,Yes,Yes,Yes,Full Solar
Battambang Secondary School,Battambang,Sangker,600,No,No,None,Awaiting Support
Kampong Cham Primary,Kampong Cham,Prey Chhor,300,Yes,No,No,Lab Only
Takeo High School,Takeo,Bati,1000,No,No,None,Awaiting Support`

  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', 'attachment; filename="moeys_schools_template.csv"')
  res.send(template)
})

// Admin: Get import history
app.get('/api/admin/import/history', async (req, res) => {
  try {
    const history = await db.collection('importHistory').find().sort({ date: -1 }).limit(20).toArray()
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch import history' })
  }
})

// Helper: Parse CSV line handling quoted values
function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    const nextChar = line[i + 1]

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

// Payment success page
app.get('/payment/success', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Payment Successful - KOOMPI Lab</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-cream min-h-screen flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <div class="w-16 h-16 bg-growth-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-cambodian-blue mb-2">Thank You!</h1>
        <p class="text-gray-600 mb-6">Your donation has been received. You're helping bring digital education to students in Cambodia.</p>
        <a href="/" class="inline-block px-6 py-3 bg-cambodian-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition">
          Return to Site
        </a>
      </div>
    </body>
    </html>
  `)
})

// Mock data for development
function getMockSchools() {
  const provinces = [
    'Phnom Penh', 'Siem Reap', 'Battambang', 'Preah Sihanouk', 'Pursat',
    'Kampong Cham', 'Kampong Thom', 'Kampong Speu', 'Takeo', 'Kampot',
    'Kampong Chhnang', 'Kep', 'Kratie', 'Mondulkiri', 'Ratanakiri',
    'Stung Treng', 'Preah Vihear', 'Oddar Meanchey', 'Banteay Meanchey', 'Pailin',
    'Kampong Cham', 'Svay Rieng', 'Prey Veng', 'Tbong Khmum',
  ]

  const statuses = ['none', 'lab', 'lab-content', 'full-solar']
  const schools = []

  // 65 existing schools
  for (let i = 0; i < 65; i++) {
    const status = i < 40 ? 'lab-content' : i < 64 ? 'lab' : 'full-solar'
    schools.push({
      _id: `school-${i + 1}`,
      name: `${provinces[i % provinces.length]} ${['Primary', 'Secondary', 'High'][i % 3]} School ${i + 1}`,
      province: provinces[i % provinces.length],
      district: `District ${((i % 10) + 1)}`,
      studentCount: 300 + Math.floor(Math.random() * 1500),
      status: status,
      fundedPercentage: 100,
      establishedAt: new Date(2023 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 12), 1).toISOString(),
    })
  }

  // Remaining schools
  for (let i = 65; i < 500; i++) {
    schools.push({
      _id: `school-${i + 1}`,
      name: `${provinces[i % provinces.length]} ${['Primary', 'Secondary', 'High'][i % 3]} School ${i + 1}`,
      province: provinces[i % provinces.length],
      district: `District ${((i % 10) + 1)}`,
      studentCount: 200 + Math.floor(Math.random() * 1800),
      status: 'none',
      fundedPercentage: Math.floor(Math.random() * 30),
    })
  }

  return schools
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
