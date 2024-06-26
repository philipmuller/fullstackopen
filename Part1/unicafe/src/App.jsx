import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ statistic }) => {
return (
  <tr>
    <td>{statistic.text}:</td>
    <td>{statistic.value}</td>
  </tr>
)}

const Statistics = ({ statistics }) => {
  const [good, neutral, bad] = statistics

  const total = {
    text: 'Total',
    value: statistics.reduce((tot, stat) => tot + stat.value, 0)
  }

  if (total.value === 0) return <p>No feedback yet</p>

  const avg = {
    text: 'Average',
    value: (good.value - bad.value) / total.value
  }
  const positive = {
    text: 'Positive',
    value: `${(good.value / total.value)*100}%`
  }

  return (
    <table>
      <tbody>
      <StatisticLine statistic={good} />
      <StatisticLine statistic={neutral} />
      <StatisticLine statistic={bad} />
      <StatisticLine statistic={total} />
      <StatisticLine statistic={avg} />
      <StatisticLine statistic={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Title text={"Give Feedback"} />

      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />

      <Title text={"Statistics"} />

      <Statistics statistics={[
        { text: 'Good', value: good },
        { text: 'Neutral', value: neutral },
        { text: 'Bad', value: bad }
      ]} />

    </div>
  )
}

export default App