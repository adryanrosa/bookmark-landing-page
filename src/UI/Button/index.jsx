import React from 'react';

function Button({ children, submit, handleClick }) {
  return (
    <button
      type={ submit ? 'submit' : 'button' }
      onClick={ handleClick }
    >
      {children}
    </button>
  );
}

export default Button;
