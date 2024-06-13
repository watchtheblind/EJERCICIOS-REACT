import './App.css'
import {useState} from 'react'
import {Button} from './components/Button'
function App() {
  const [calculation, setCalculationValue] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const HANDLERS = {
    AC: () => {
      setInputValue('')
      setCalculationValue(0)
    },
    '%': () => {
      const result = evaluateExpression(inputValue) * 0.01
      setInputValue(result)
      setCalculationValue(result)
    },
    '+/-': () => {
      const newValue = inputValue.toString().startsWith('-')
        ? inputValue.toString().slice(1)
        : `-${inputValue.toString()}`
      setInputValue(newValue)
      setCalculationValue(evaluateExpression(newValue))
    },
    '=': () => {
      setInputValue(calculation)
    },
    default: (newValue) => {
      /* el orden en que se ejecutan las operaciones es importante en React, y debes asegurarte de que los estados 
        se actualicen correctamente antes de hacer uso de ellos. const newInputValue = inputValue + value 
        guardamos en una variable, para que se actualice antes de de que finalice la función*/
      const newInputValue = inputValue + newValue
      setInputValue(newInputValue)
      setCalculationValue(evaluateExpression(newInputValue))
    },
  }

  const evaluateExpression = (expression) => {
    try {
      const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'))
      const multiplier = Math.pow(10, 11)
      return Math.round(result * multiplier) / multiplier // Redondea a 11 decimales
    } catch (error) {
      return calculation //retorna el ultimo valor calculado
    }
  }
  const updatescreen = (value) => {
    /*. Si el valor de value coincide con una clave del objeto, se ejecutará el método correspondiente.
     Si no coincide con ninguna clave, se ejecutará la función default. */
    HANDLERS[value] ? HANDLERS[value]() : HANDLERS.default(value)
  }
  return (
    <>
      <header>
        <h1>REACT CALCULATOR</h1>
      </header>
      <main className='calculator-body'>
        <div className='calculator-screen'>
          <input type='text' value={calculation} readOnly className='result' />
          <input
            value={inputValue}
            readOnly
            type='text'
            className='operation'
          />
        </div>
        <div className='calculator-buttons'>
          <div className='calculator-columns'>
            <div className='column'>
              <Button
                clase='action'
                value='AC'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='7'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='4'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='1'
                updateScreen={updatescreen}
              ></Button>
            </div>
            <div className='column'>
              <Button
                clase='action'
                value='+/-'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='8'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='5'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='2'
                updateScreen={updatescreen}
              ></Button>
            </div>
            <div className='column'>
              <Button
                clase='action'
                value='%'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='9'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='6'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='number'
                value='3'
                updateScreen={updatescreen}
              ></Button>
            </div>
            <div className='column'>
              <Button
                clase='operator'
                value='÷'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='operator'
                value='×'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='operator'
                value='-'
                updateScreen={updatescreen}
              ></Button>
              <Button
                clase='operator'
                value='+'
                updateScreen={updatescreen}
              ></Button>
            </div>
          </div>
          <span className='row'>
            <Button
              clase='number-zero'
              value='0'
              updateScreen={updatescreen}
            ></Button>
            <Button
              clase='number'
              value='.'
              updateScreen={updatescreen}
            ></Button>
            <Button
              clase='operator'
              value='='
              updateScreen={updatescreen}
            ></Button>
          </span>
        </div>
      </main>
    </>
  )
}

export default App
