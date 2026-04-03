interface FormInputProps {
  id: string
  label: string
  placeholder: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput ({
  label,
  placeholder,
  type = 'text'
}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-[16px] font-semibold font-sans text-black mb-2'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
      />
    </div>
  )
}
