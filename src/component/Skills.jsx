import React from "react";
import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import spring from "../assets/spring.png";
import microservices from "../assets/microservice.png";
import aws from "../assets/aws.png";
import mongo from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodeJs.png";
//import jira from "../assets/jira.png";
import swagger from "../assets/swagger.png";

//import tailwind from "../assets/tailwind.png"

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: microservices,
      title: "Microservices",
      style: "shadow-blue-500",
    },

    {
      id: 4,
      src: spring,
      title: "SpringBoot",
      style: "shadow-green-500",
    },

    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },

    {
      id: 2,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 5,
      src: react,
      title: "ReactJs",
      style: "shadow-blue-600",
    },

    {
      id: 6,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-green-600",
    },

    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-700",
    },

    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-700",
    },

    {
      id: 9,
      src: bootstrap,
      title: "BootStarp",
      style: "shadow-red-500",
    },

    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 11,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-700",
    },

    {
      id: 10,
      src: docker,
      title: "Docker",
      style: "shadow-blue-700",
    },

    {
      id: 13,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 15,
      src: swagger,
      title: "Swagger",
      style: "shadow-pink-700",
    },
  ];

  return (
    <div name="Skills" className="bg-gradient-to-b from-gray-800 to-black ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
