import React, { useState } from 'react'

import { images } from '../../constants'
import { client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>chat whith me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:mostafamanchester837@gmail.com' className='p-text'>
            mostafamanchester837@gmail.com
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: 01287989642' className='p-text'>
            01287989642
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div>
            <textarea
              name='message'
              className='p-text'
              placeholder='Your Message'
              value={message}
              onChange={handleChangeInput}
              required="true"
            />
          </div>

          <button className='p-text' type='button' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
