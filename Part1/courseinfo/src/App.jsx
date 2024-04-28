const Header = (props) => {
  return (<h1>{props.title}</h1>)
}

const Part = (props) => {
  return (<p>{props.part.name} {props.part.excercises}</p>)
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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', excercises: 10},
      {name: 'Using props to pass data', excercises: 7},
      {name: 'State of a component', excercises: 14},
  ] 
}

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App