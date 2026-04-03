
interface FormSelectProps {
  id: string
  label: string
  value: string
  options: []
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function FormSelect({ id, label, options, value, onChange }: FormSelectProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='block text-[16px] font-semibold font-sans text-black mb-2'
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`
          w-full border border-gray-200 rounded-md px-4 py-3
          text-sm font-sans focus:outline-none focus:ring-2
          focus:ring-navy bg-white
          ${value === '' ? 'text-black' : 'text-gray-700'}
        `}
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