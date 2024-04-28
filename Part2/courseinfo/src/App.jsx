import Course from "./components/Course";

const App = () => {

  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {id: 1, name: 'Fundamentals of React', excercises: 10},
        {id: 2, name: 'Using props to pass data', excercises: 7},
        {id: 3, name: 'State of a component', excercises: 14},
        {id: 4, name: 'Redux', excercises: 11},
      ] 
    }, 
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {id: 1, name: 'Routing', excercises: 3},
        {id: 2, name: 'Middlewares', excercises: 7},
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map(course =>
      <Course key={course.id} course={course}/>
      )}
    </div>
  )
}

export default App