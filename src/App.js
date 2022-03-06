import data from "./data.json";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import useInterval from "react-useinterval";

function App() {
  const [index, setIndex] = useState(0);

  const { image, name, quote, title } = data[index];

  const nextSlide = () => {
    setIndex(index + 1);
    if (index === data.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(data.length - 1);
    }
  };

  useInterval(() => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 5000);

  // animation animation

  const bg = document.querySelector(".animation");

  let percentage = 30;

  let int = setInterval(blurring, 1);

  function blurring() {
    percentage++;

    if (percentage >= 100) {
      clearInterval(int);
    }

    bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`;
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <section className='text-gray-600 body-font h-screen bg-neutral-100'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center '>
          <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-500 '>Reviews</h1>
          <div className='animation'>
            <img src={image} alt='' className='h-36 w-36 mx-auto  b-2 my-8 bg-white border-2 border-blue-500 rounded-full object-cover ' />
            <div className='flex'>
              <FaArrowAltCircleLeft onClick={prevSlide} className='text-5xl mr-4 cursor-pointer fill-blue-500 hover:fill-blue-800 hover:scale-125  my-auto' />
              <p className='leading-relaxed text-lg'>{quote}</p>
              <FaArrowAltCircleRight onClick={nextSlide} className='text-5xl ml-4 cursor-pointer fill-blue-500 hover:fill-blue-800 hover:scale-125  my-auto' />
            </div>

            <span className='inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6'></span>
            <h2 className='text-gray-900 font-lg title-font tracking-wider text-sm font-bold'>{name.toUpperCase()}</h2>
            <p className='text-gray-500 italic'>{title}</p>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='inline-block w-8 h-8 text-blue-500 my-8' viewBox='0 0 975.036 975.036'>
            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default App;
