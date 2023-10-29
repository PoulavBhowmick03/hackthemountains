// "use client";

// import React, { useState } from 'react';
// import Image from "next/image";
// import form from "public/form.png";

// const HealthProblemForm = () => {
//   const [healthProblem, setHealthProblem] = useState('');
//   const [apiResponse, setApiResponse] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Create an object with the form data
//     const formData = {
//       inputs: healthProblem, // Assuming healthProblem is the input
//     };

//     // Define the API endpoint and your API key
//     const apiUrl = 'https://api-inference.huggingface.co/models/noobmodeler099/test';
//     const apiKey = 'Bearer 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';

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           Authorization: apiKey,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('API Response:', result); // Log the response

//         setApiResponse(result);
//       } else {
//         console.error('API request failed:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
// <div className="flex">
//   <div className="mx-20 w-full max-w-md p-3 rounded-lg shadow-md">
//     <h2 className="pt-12 text-4xl font-bold text-center mb-4 font-inter ">Health Problem Form</h2>
//     <form
//   onSubmit={handleSubmit}
//   className="max-w-md mx-auto p-4 bg-gradient-to-tr from-sky-200 via-sky-300 to-blue-200 shadow-md rounded-lg transform transition-transform hover:scale-105"
// >
//   <div className="mb-4">
//     <label htmlFor="healthProblem" className="block text-gray-700 text-sm font-bold mb-2">
//       Current Health Problem:
//     </label>
//     <input
//       type="text"
//       id="healthProblem"
//       name="healthProblem"
//       value={healthProblem}
//       onChange={(e) => setHealthProblem(e.target.value)}
//       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 text-gray-700"
//       placeholder="Enter your current health problem"
//     />
//   </div>
//   <button
//     type="submit"
//     className="w-full bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring"
//   >
//     Submit
//   </button>
// </form>


//     {/* Display the API response */}
//     {apiResponse && (
//       <div className="mt-8 bg-gray-100 p-4 rounded-lg">
//         <h3 className="text-xl font-semibold mb-2">API Response:</h3>
//         <pre className="text-gray-800 whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
//       </div>
//     )}
//   </div>

//   <div className="flex-1">
//     <Image src={form} alt="" className=" ml-[120px] w-[900px] mt-[-10px] h-[800px] object-contain" />
//   </div>
// </div>

//   </div>
//   );
// };

// export default HealthProblemForm;

"use client";

import React, { useState } from 'react';
import Image from "next/image";
import form from "public/form.png";

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
        console.log('API Response:', result); // Log the response
        setApiResponse(result);
      } else {
        console.error('API request failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

 // Function to render bars for each data point
 const renderBars = () => {
    if (apiResponse && Array.isArray(apiResponse)) {
      return apiResponse.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <div className="w-60 font-semibold">{item[0].label}:</div>
          <div className="relative w-full bg-blue-200 h-6">
            <div className="absolute top-0 left-0 h-6 bg-blue-600" style={{ width: `${item[0].score * 100}%` }}></div>
          </div>
        </div>
      ));
    }
    return null;
  };

  return (
    <div>
      <div className="flex">
        <div className="mx-20 w-full max-w-md p-3 rounded-lg shadow-md">
          <h2 className="pt-12 text-4xl font-bold text-center mb-4 font-inter">Health Problem Form</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-gradient-to-tr from-sky-200 via-sky-300 to-blue-200 shadow-md rounded-lg transform transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <label htmlFor="healthProblem" className="block text-gray-700 text-sm font-bold mb-2">
                Current Health Problem:
              </label>
              <input
                type="text"
                id="healthProblem"
                name="healthProblem"
                value={healthProblem}
                onChange={(e) => setHealthProblem(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 text-gray-700"
                placeholder="Enter your current health problem"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring"
            >
              Submit
            </button>
          </form>

          {/* Display the API response as bars */}
          <div className="mt-8 bg-gray-900 p-4 rounded-lg text-white-700">
            <h3 className="text-xl font-semibold mb-2">API Response:</h3>
            {renderBars()}
          </div>
        </div>

        <div className="flex-1">
          <Image src={form} alt="" className="ml-[120px] w-[900px] mt-[-10px] h-[800px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HealthProblemForm;

