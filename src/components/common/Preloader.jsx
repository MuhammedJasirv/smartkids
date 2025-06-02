import React, { useState, useEffect } from 'react';

const PreLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90">
      <div className="w-20 h-20 mb-4 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
      <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-white font-medium">{progress}%</p>
    </div>
  );
};

export default PreLoader;