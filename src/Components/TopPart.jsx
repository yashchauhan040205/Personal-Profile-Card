import React from "react"
import profileImage from "../assets/profileImg.jpg"

const TopPart = () => {
  return (
    <div className="personal">
      <img src={profileImage} alt="" />
      <h1 className="name">Yash Chauhan</h1>
      <p className="country">India</p>
      <p className="stack">Front-End Web Developer</p>
    </div>
  )
}

export default TopPart