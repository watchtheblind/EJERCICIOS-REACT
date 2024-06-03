import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export function Display({}) {
  const [counter, setCounter] = useState(0)
  const addCounter = () => {
    setCounter(counter + 1)
  }
  const substractCounter = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div className='ctr-display-screen border border-primary rounded p-4 mb-2'>
        {counter}
      </div>
      <button
        className='ctr-add-counter rounded p-1 px-2 w-25'
        onClick={addCounter}
      >
        +
      </button>
      <button
        className='ctr-subtract-counter rounded p-1 px-2 w-25'
        onClick={substractCounter}
        content='-'
      >
        -
      </button>
      <button
        className='ctr-reset-counter rounded p-1 w-50'
        onClick={() => setCounter(0)}
      >
        RESET
      </button>
    </>
  )
}
