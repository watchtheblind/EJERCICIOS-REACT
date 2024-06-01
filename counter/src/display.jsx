import { useState } from 'react'
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
      <div className='ctr-display-screen'>{counter}</div>
      <button className='ctr-add-counter' onClick={addCounter}>
        +
      </button>
      <button
        className='ctr-subtract-counter'
        onClick={substractCounter}
        content='-'
      >
        -
      </button>
      <button className='ctr-reset-counter' onClick={() => setCounter(0)}>
        RESET
      </button>
    </>
  )
}
