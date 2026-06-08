import React from 'react'

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: string[]
}

export default function FormSelect({ label, options, id, name, ...props }: FormSelectProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id || name}
        className='block text-[16px] font-semibold font-sans text-black mb-1'
      >
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id || name}
        name={name || id}
        className={`
          w-full border border-[#D9E1EA] rounded-md px-4 py-3
          text-[16px] font-sans focus:outline-none focus:ring-1
          focus:ring-navy bg-white
          ${!props.value ? 'text-black' : 'text-gray-700'}
        `}
        {...props}
      >
        <option value='' disabled>
          Select an option
        </option>
        {options.map(opt => (
          <option key={opt} value={opt} className='text-gray-700'>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}