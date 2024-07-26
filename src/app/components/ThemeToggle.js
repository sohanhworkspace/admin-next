// components/ThemeToggle.js
'use client'

import { useEffect, useState } from 'react'
import styles from '../styles/ThemeToggle.module.scss'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    }
  }

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}

export default ThemeToggle
