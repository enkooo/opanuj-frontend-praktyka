import { useState } from 'react'
import { NumberInput } from './NumberInput'
import { BaseButton } from './BaseButton'
import { useCalculate } from '../hooks/useCalculate'

export const Calculator = () => {
  const [numA, setNumA] = useState<number>(0)
  const [numB, setNumB] = useState<number>(0)
  const { result, calculate } = useCalculate()

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={numA} onChange={setNumA} />
        <NumberInput value={numB} onChange={setNumB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <BaseButton label="+" onClick={() => calculate('add', numA, numB)} />
        <BaseButton
          label="-"
          onClick={() => calculate('subtract', numA, numB)}
        />
        <BaseButton
          label="*"
          onClick={() => calculate('multiply', numA, numB)}
        />
        <BaseButton label="/" onClick={() => calculate('divide', numA, numB)} />
      </div>
      <div>Result: {result}</div>
    </div>
  )
}
