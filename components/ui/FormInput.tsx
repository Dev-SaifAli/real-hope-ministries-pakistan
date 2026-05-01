interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function FormInput ({
  label,
  id,
  name,
  type = 'text',
  className = '',
  ...props
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id || name} className='text-[16px] font-semibold font-sans text-black mb-1'>
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id || name}
        name={name || id}
        type={type}
        className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
        {...props}
      />
    </div>
  )
}
