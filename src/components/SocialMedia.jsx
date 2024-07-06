import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/abhishektiwari-22/">
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://www.github.com/abhishek-tiwari-22/">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
