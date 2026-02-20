/**
 * Reusable form components for school submission
 */

interface FormInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'number'
  min?: string
}

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = 'text',
  min,
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
      />
    </div>
  )
}

interface FormSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
  placeholder?: string
}

export function FormSelect({ label, value, onChange, options, required = false, placeholder }: FormSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface NeedCheckboxProps {
  need: string
  checked: boolean
  onToggle: () => void
}

export function NeedCheckbox({ need, checked, onToggle }: NeedCheckboxProps) {
  return (
    <label
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition ${
        checked ? 'border-koompi-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="w-4 h-4 text-koompi-primary rounded"
      />
      <span className="text-sm">{need}</span>
    </label>
  )
}
