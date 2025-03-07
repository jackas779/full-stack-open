import { useState } from 'react'

const Title = ({ text }) => <h1>{ text }</h1>

const Button = ({ text, onClick }) => <button onClick={onClick} >{text}</button>

const Counter = ({ value, text }) => <p>{text} { value }</p>

const average = (good, bad, total) => {
  const result = (good - bad ) / total
  return isNaN(result) ? 0 : result
}

const positive = (good, total) => {
  const result = ( good * 100 ) / total
  return isNaN(result) ? 0 : result + ' %'
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handlebadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Title text={'give feedback'} />
      <Button text={'good'} onClick={handleGoodClick} />
      <Button text={'neutral'} onClick={handleNeutralClick} />
      <Button text={'bad'} onClick={handlebadClick} />
      <Title text={'statistics'} />
      <Counter text={'good'} value={good} />
      <Counter text={'neutral'} value={neutral} />
      <Counter text={'bad'} value={bad} />
      <Counter text={'all'} value={total} />
      <Counter text={'average'} value={average(good,bad,total)} />
      <Counter text={'positive'} value={positive(good,total)} />
    </div>
  )
}

export default App