import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistic = ({ statistic }) => <p>{statistic.text}: {statistic.value}</p>

const StatBlock = ({ statistics }) => {
  return (
    <>
      {/*statistics.map((stat, index) => <Statistic key={index} text={stat.text} value={stat.value} />)*/}
      <Statistic statistic={statistics[0]} />
      <Statistic statistic={statistics[1]} />
      <Statistic statistic={statistics[2]} />
    </>
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

      <StatBlock statistics={[
        { text: 'Good', value: good },
        { text: 'Neutral', value: neutral },
        { text: 'Bad', value: bad }
      ]} />

    </div>
  )
}

export default App