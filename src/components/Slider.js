import React, { useState, useEffect } from "react";
import "../scss/slider.scss";
import ImgComp from "./ImgComp";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

export default function Slider() {
  let sliderArr = [
    <ImgComp src={img1} />,
    <ImgComp src={img2} />,
    <ImgComp src={img3} />,
    <ImgComp src={img4} />,
  ];
  const [x, setX] = useState(0);
  const [active, setActive] = useState(0);
  const goLeft = () => {
    setActive(
      x === 0
        ? Math.abs(-100 * (sliderArr.length - 1)) / 100
        : Math.abs((x + 100) / 100)
    );
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    setActive(
      sliderArr.length - 1 < active + 1 ? 0 : Math.abs((x - 100) / 100)
    );


    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  const handleDots = (val) => {
    setActive(val);
    if (val === 0) {
      setX(0);
    } else {
      setX(-(val * 100));
    }
  };
  console.log({ x, active });



  
  {/*========= Loop ========*/}

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     goRight()
  //   },3000)
  // },[x])

  return (
    <>
      <div className="slider">
        {sliderArr.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        ))}
        <div className="dots">
          <div style={{ display: "flex", gap:'5px' }}>
            {sliderArr.map((_, index) => (
              <div
                onClick={() => handleDots(index)}
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  cursor:'pointer',
                  background: active === index ? "red" : "blue",
                }}
              ></div>
            ))}
          </div>
        </div>

        <button id="goLeft" onClick={goLeft}>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}
