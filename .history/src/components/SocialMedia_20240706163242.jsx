import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/abhishek-kumar-7b7b7b1b1/">
        <BsLinkedin />
      </a>
    </div>

    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;
