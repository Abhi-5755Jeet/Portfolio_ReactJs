import React from "react";

const About = () => {
  return (
    <div
      name="Education"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        {/* <p className="text-xl mt-10" style={{ fontWeight: 'bold' }}>
          Post-Graduation Diploma in Advanced Computing - CDAC-Pune<br />
          03-2023 to 10-2023<br />
          Percentage: 69%
        </p> */}
        <br />
        <p className="text-xl mt-15" style={{ fontWeight: "bold" }}>
          Bachelor of Mechanical Engineering - North Maharashtra University
          Jalgaon <br />
          2022
          <br />
          8.23 CGPA
        </p>
        <br />
        <p className="text-xl mt-15" style={{ fontWeight: "bold" }}>
          Diploma in Mechanical Engineering - Maharashtra State Board of
          Technical Education <br />
          2019
          <br />
          Percentage: 66%
        </p>
        <br />
        <p className="text-xl mt-15" style={{ fontWeight: "bold" }}>
          SSC <br />
          2015
          <br />
          Percentage: 61.20%
        </p>
      </div>
    </div>
  );
};

export default About;
