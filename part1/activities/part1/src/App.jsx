// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

////// todo componente de react tiene que comenzar en maysucula

const Hello = ({name, age}) =>{
  return (
    <>
      <p>Hello world {name} your age is : {age}</p>
    </>
  )
}

const App = () => {
  const a = 21
  const b = 5
  const now = ['peter','anais']
  console.log(a + b)
  return (
    <>
      <Hello name='Jorge luna'  age='45'/>
      <Hello name='auron'  age='58'/>
      <Hello name='Midu'  age='20'/>
      <p>
        {now}
      </p>
    </>
  )
}

export default App