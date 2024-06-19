type NumberInputProps = {
  value: number
  onChange: (value: number) => void
}

export const NumberInput = ({ value, onChange }: NumberInputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={({ target: { value } }) => onChange(parseFloat(value) || 0)}
    />
  )
}
