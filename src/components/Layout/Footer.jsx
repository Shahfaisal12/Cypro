import React from 'react'
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className="footer-section py-4 bg-dark">
      <div className="container">
        <div className="row">
          <div className="social-icon d-flex mb-3">
            <BsInstagram className='fs-4 text-white' /> <BsTwitter className='fs-4 mx-3 text-white' /> <BsDiscord className='fs-4 text-white' /> <RiSendPlaneFill className='fs-4 mx-3 text-white' />
          </div>
          <div className="d-flex justify-content-between">
            <div className="copyright text-white">Copyright © 2022 Crypto.com. All rights reserved.</div>
            <div className="footer-nav">
              <ul className='d-flex flex-wrap'>
                <li> <a href="/">Help Center</a> </li>
                <li> <a href="/">Blog</a> </li>
                <li> <a href="/">T&C</a> </li>
                <li> <a href="/">Privacy Notice</a> </li>
                <li> <a href="/">Cookies pre</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer