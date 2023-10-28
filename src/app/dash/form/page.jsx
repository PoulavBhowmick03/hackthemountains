"use client";

import React, { useState } from 'react';

const HealthProblemForm = () => {
  const [healthProblem, setHealthProblem] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      inputs: healthProblem, // Assuming healthProblem is the input
    };

    // Define the API endpoint and your API key
    const apiUrl = 'https://api-inference.huggingface.co/models/noobmodeler099/test';
    const apiKey = 'Bearer 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';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setApiResponse(result);
      } else {
        console.error('API request failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 text-black"
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

      {/* Display the API response */}
      {apiResponse && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">API Response:</h3>
          <pre className="text-gray-800 whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default HealthProblemForm;
