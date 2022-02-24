import React from 'react'
import {BsWhatsapp, BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://wa.link/ij99lg' target='_blank'>
            <BsWhatsapp/>
        </a>
        <a href='https://github.com/MOSTAFA837' target='_blank'>
            <BsGithub/>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100004228836620' target='_blank'>
            <FaFacebookF/>
        </a>
    </div>
  )
}

export default SocialMedia