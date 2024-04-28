const Header = ({ title }) => {
  return (<h1>{title}</h1>)
}

const Part = ({ part }) => {
  const { name, excercises } = part;
  
  return (<p>{name} {excercises}</p>)
}

const Content = ({ parts }) => {
  return (
    <>
      {/*parts.map((part, index) => <Part key={index} part={part}/>)*/}
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of excercises: {total}</p>
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

  const totalExcercises = course.parts.reduce((total, part) => total+part.excercises, 0);

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExcercises}/>
    </div>
  )
}

export default App