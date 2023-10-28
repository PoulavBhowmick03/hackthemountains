
"use client";

import React, { useState } from 'react';

const HealthProblemForm = () => {
  const [healthProblem, setHealthProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server or perform an action.
    console.log('Current Health Problem:', healthProblem);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Health Problem Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="healthProblem" className="block text-gray-700 font-bold">
            Current Health Problem:
          </label>
          <input
            type="text"
            id="healthProblem"
            name="healthProblem"
            value={healthProblem}
            onChange={(e) => setHealthProblem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your current health problem"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HealthProblemForm;
