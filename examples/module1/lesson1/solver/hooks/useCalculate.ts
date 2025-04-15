import { useState } from 'react'

export const useCalculate = () => {
  const [result, setResult] = useState<number | string>(0)

  const operations = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
    multiply: (a: number, b: number) => a * b,
    divide: (a: number, b: number) => {
      if (b === 0) {
        throw new Error('Division by zero')
      }
      return a / b
    },
  }

  const calculate = (
    operation: keyof typeof operations,
    numA: number,
    numB: number
  ) => {
    try {
      const res = operations[operation](numA, numB)
      setResult(res)
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message)
      } else {
        setResult('Unknown error')
      }
    }
  }

  return { result, calculate }
}
