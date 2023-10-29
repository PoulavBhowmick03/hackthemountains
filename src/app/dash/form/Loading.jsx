import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-20">
      <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"> </div>
        <div className='mx-4'>Predicting Results</div>
    </div>
  );
};

export default Loading;
