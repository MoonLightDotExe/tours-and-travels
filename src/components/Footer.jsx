import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
      <h1> ABOUT US</h1>
      <div className='about'>
        Project was created by Group No. 3 to implement a simple tours and
        travels agency.
        <div className='us'>
          Created By:
          <ul className='names'>
            <li>51 Pratham Pandya</li>
            <li>18 Ashwin Pawar</li>
            <li>40 Ishaan Mishra</li>
            <li>32 Sahul Yadav</li>
          </ul>
        </div>
        <div className='link-tab'>
          <a
            href='https://www.instagram.com/pratham_14th/'
            className='links'
          >
            <AiOutlineInstagram />
            Insta Link
          </a>
          <a href='https://github.com/MoonLightDotExe/tours-and-travels'>
            <AiFillGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
