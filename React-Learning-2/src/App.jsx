import React from 'react'
import './App.css'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className="app-container">
      <Cards name="Heet Dhorajiya" age={21} />
      <Cards name="Yug Gosai" age={20} />
      <Cards name="Keval Bam Bam" age={19} />

    </div>
  )
}

export default App
