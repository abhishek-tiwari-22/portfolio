import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;
