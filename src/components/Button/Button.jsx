import React from 'react'
import styles from './Button.module.css'


const Button = ({...props}) => {
  return (
    <button className={styles.Btn} {...props} type='submit'>
      Подтвердить
    </button>
  )
}

export default Button
