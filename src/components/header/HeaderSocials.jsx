import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/souvik-das-048479153/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/piy4l" target="_blank"><AiFillGithub/></a>
        <a href="https://facebook.com/souvik.piyal" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials