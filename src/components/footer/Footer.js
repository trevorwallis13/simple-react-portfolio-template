import React from 'react'
import userData from '../../data/userData'
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <span>&copy; {userData.name} 2022</span>
    </footer>
  )
}

export default Footer