import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <button type="button" onClick="window.location='https://www.linkedin.com/in/abhishektiwari-22/';">
      <BsLinkedin />
    </button>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;
