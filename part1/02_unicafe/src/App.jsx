import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good + 1)
  }

  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
  }

  const handleBadButton = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClickHandler={handleGoodButton} text='Good' />
        <Button onClickHandler={handleNeutralButton} text='Neutral' />
        <Button onClickHandler={handleBadButton} text='Bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ onClickHandler, text }) => <button onClick={onClickHandler}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const [GOOD_SCORE, NEUTRAL_SCORE, BAD_SCORE] = [1, 0, -1]

  const calculateScoreAverage = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }

    return (good * GOOD_SCORE + neutral * NEUTRAL_SCORE + bad * BAD_SCORE) / (good + neutral + bad)
  }

  const calculatePositiveRate = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }

    return Math.round(good  / (good + neutral + bad) * 1000) / 10
  }

  if (good + neutral + bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={good + neutral + bad} />
        <StatisticLine text='Average' value={calculateScoreAverage(good, neutral, bad)} />
        <StatisticLine text='Positive' value={calculatePositiveRate(good, neutral, bad)} />
      </table>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App