import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className='font-serif text-3xl font-bold'>Heet Dhorajiya</h1>
      <button className={styles.btn} className='font-bold bg-blue-400 p-2'>Login</button>
    </div>
  )
}

export default Header
