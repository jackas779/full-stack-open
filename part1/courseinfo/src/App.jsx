const Header = ({course})=>{
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Total = ({total}) =>{
  const [part1, part2, part3] = total
  return (
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p> {name} {exercises} </p>
  )
}

const Content = ({content}) =>{
  const [part1, part2, part3] = content
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content  content = {parts} />
      <Total total ={parts}/>
    </div>
  )
}

export default App
