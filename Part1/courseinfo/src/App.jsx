const Header = (props) => {
  return (<h1>{props.title}</h1>)
}

const Part = (props) => {
  return (<p>{props.part.title} {props.part.excercises}</p>)
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => <Part key={index} part={part}/>)}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises: {props.parts.reduce((total, part) => total+part.excercises, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {title: 'Fundamentals of React', excercises: 10},
    {title: 'Using props to pass data', excercises: 7},
    {title: 'State of a component', excercises: 14},
    {title: 'Another part', excercises: 3}
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App