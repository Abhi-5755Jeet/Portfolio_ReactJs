import React from "react";
import ABhi from "../assets/portfolio/ABhi.jpg";
import restaurant from "../assets/portfolio/retaurant.png";
//import reactWeather from "../assets/portfolio/reactWeather.jpg"
import portfolio_image from "../assets/portfolio/portfolio_image.png";
import bestBuy from "../assets/portfolio/estBuy.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: ABhi,
      text: "Liquor Embassy",
      githubLink: "https://github.com/Abhi-5755Jeet/Dac_Project.git",
    },
    {
      id: 2,
      src: restaurant,
      text: "Restaurant Management System",
      githubLink:
        "https://github.com/Abhi-5755Jeet/Restaurant_Management_System.git",
    },
    {
      id: 3,
      src: bestBuy,
      text: "Best Buy E-Commerse Retail",
      githubLink: "https://github.com/Abhi-5755Jeet/Weather_Forecast_React.git",
    },
    {
      id: 4,
      src: portfolio_image,
      text: "My Portfolio",
      githubLink:
        "https://github.com/Abhi-5755Jeet/Abhi-Portfolio-Using-React.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, text, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <h2
                className="text-white py-2 text-center"
                style={{ marginTop: "px", fontWeight: "bold", color: "" }}
              >
                {text}
              </h2>

              <div className="flex items-center justify-center">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                  <br></br>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
