interface CTAButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
}

const CTAButton = ({ variant, onClick, children }: CTAButtonProps) => {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95'

  const variants = {
    primary: 'bg-solar-amber text-white hover:bg-amber-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CTAButton
