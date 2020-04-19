import React from 'react';

// import { Container } from './styles';

const Subtitle = (props) => {
  const { text, icon } = props
  return (
    <div className="flex items-center p-4 text-white rounded-r shadow bg-primary md:w-1/4">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
      <span className="ml-2">{text}</span>
    </div>
  )
};

export default Subtitle;
