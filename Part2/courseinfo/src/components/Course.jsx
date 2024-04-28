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
            {parts.map(part => 
            <Part key={part.id} part={part}/>
            )}
        </>
    )
}

// const Total = ({ total }) => {
//     return (
//         <p>Number of excercises: {total}</p>
//     )
// }

const Course = ({ course }) => {

    {/*const totalExcercises = course.parts.reduce((total, part) => total+part.excercises, 0);*/}

    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} />
            {/* {<Total total={totalExcercises}/>} */}
        </div>
    )
}

export default Course