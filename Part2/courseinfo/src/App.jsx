import Course from "./components/Course";

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {id: 1, name: 'Fundamentals of React', excercises: 10},
      {id: 2, name: 'Using props to pass data', excercises: 7},
      {id: 3, name: 'State of a component', excercises: 14},
    ] 
  }

  return (<Course course={course} />)
}

export default App