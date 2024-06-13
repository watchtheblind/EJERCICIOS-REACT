export const Button = ({value, clase, updateScreen}) => {
  const handleClick = () => {
    updateScreen(value) //como agarra el value, se puede pasar como argumento y se entenderá que el argumento es igual a value
  }
  return (
    <div onClick={handleClick} className={`calculator-button ${clase}`}>
      {value}
    </div>
  )
}
