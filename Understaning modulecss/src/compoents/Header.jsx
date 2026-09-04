import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
        <div>
            <h1 className={styles.head}>React Learning</h1>
            <p className={styles.para}>Learning from youtube Shearyian school of Academy</p>
        </div>
    </div>
  )
}

export default Header