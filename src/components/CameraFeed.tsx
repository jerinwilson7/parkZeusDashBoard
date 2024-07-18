import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import noFeed from '../assets/Images/nofeed.svg'
import { useState } from "react"
import { usePark } from "../contexts/MainContext";

export const CameraFeed = () => {

  const { gates } = usePark();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gates || gates.length === 0) {
    return <div>Loading.....</div>;
  }

  const currentGate = gates[currentIndex];
  const currentCamera = currentGate.cameras[0]; 

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? gates.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === gates.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };

  return (
    <div className="flex flex-col bg-white p-6 basis-1/2 rounded-md col-span-1 shadow-md">
    <h2>Camera Feed</h2>
    <div className="flex flex-col h-full items-center">
      <div className="flex items-center justify-center pb-2 gap-3 h-full w-full">
        <button className="p-2 bg-white rounded-full shadow-md "
         onClick={prevSlide}
         >
            <FaAngleLeft/>
        </button>

        <div className="flex justify-center items-center h-44 w-full">
            <div className="flex flex-col justify-center items-center rounded-md w-full h-full bg-gray-500"> 
                <img src={noFeed} alt="" />
                <span>No Feed</span>
            </div>
        </div>
        <button className="p-2 bg-white rounded-full shadow-md"
         onClick={nextSlide}
         >
            <FaAngleRight/>
        </button>
      </div>

      <div>
        <p>{gates[currentIndex].name} / {currentCamera.name}</p>
      </div>
    </div>
  </div>
  )
}


