import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-mint-500">
          Hello, Everyone! 👋
        </h1>
        <p className="text-lg">
          Welcome to <strong>Chili's React Template</strong>! This setup is here
          to help you kickstart your coding journey with all the essentials in
          one place.
        </p>
        <p className="mt-4 text-base font-medium">Happy Coding! 🎉</p>
        <p className="mt-4 text-md">
          <strong>Chili</strong> loves you all! 🌶️
        </p>
      </div>
    </div>
  );
};

export default App;
