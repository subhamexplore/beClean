import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import left from "../assets/images/Group 60.png"
import right from "../assets/images/Group 61.png"
import caro1 from "../assets/images/caro1.png"
import caro2 from "../assets/images/caro2.png"
import caro3 from "../assets/images/caro3.png"

const CardCaro = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [cardPerView, setCardPerView] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector(".card");
    const cardWidth = firstCard.offsetWidth;
    setFirstCardWidth(cardWidth);
    setCardPerView(Math.round(carousel.offsetWidth / cardWidth));

    const carouselChildren = [...carousel.children];
    const totalCards = carouselChildren.length;

    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    const handleResize = () => {
      const cardWidth = carousel.querySelector(".card").offsetWidth;
      setFirstCardWidth(cardWidth);
      setCardPerView(Math.round(carousel.offsetWidth / cardWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!wrapperRef.current.matches(":hover")) autoPlay();
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [timeoutId, firstCardWidth, cardPerView]);

  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    carousel.scrollLeft +=
      direction === "left" ? -firstCardWidth : firstCardWidth;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");
  };

  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    const timeout = setTimeout(() => {
      carouselRef.current.scrollLeft += firstCardWidth;
    }, 2500);
    setTimeoutId(timeout);
  };

  useEffect(() => {
    autoPlay();
    return () => clearTimeout(timeoutId);
  }, [isAutoPlay, firstCardWidth]);
  return (
    <div
      className="wrapper"
      ref={wrapperRef}
      onMouseEnter={() => clearTimeout(timeoutId)}
      onMouseLeave={autoPlay}
    >
      <ul
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img className="card" src={caro1} height={320} alt="" />
        <img className="card" src={caro2} height={320} alt="" />
        <img className="card" src={caro3} height={320} alt="" />
        {/* <li className="card">
          <div className="img">
            <img src="images/img-2.jpg" alt="img" draggable="false" />
          </div>
          <h2>Joenas Brauers</h2>
          <span>Web Developer</span>
        </li>
        <li className="card">
          <div className="img">
            <img src="images/img-3.jpg" alt="img" draggable="false" />
          </div>
          <h2>Lariach French</h2>
          <span>Online Teacher</span>
        </li> */}
        {/* <li className="card">
          <div className="img">
            <img src="images/img-4.jpg" alt="img" draggable="false" />
          </div>
          <h2>James Khosravi</h2>
          <span>Freelancer</span>
        </li>
        <li className="card">
          <div className="img">
            <img src="images/img-5.jpg" alt="img" draggable="false" />
          </div>
          <h2>Kristina Zasiadko</h2>
          <span>Bank Manager</span>
        </li>
        <li className="card">
          <div className="img">
            <img src="images/img-6.jpg" alt="img" draggable="false" />
          </div>
          <h2>Donald Horton</h2>
          <span>App Designer</span>
        </li> */}
      </ul>
      <div className="d-flex justify-content-end">
      <div
        id="left"
        className="arrow-icon"
        icon={faAngleLeft}
        onClick={() => handleArrowClick("left")}
        style={{cursor: "pointer"}}
      >
        <img src={left} height={40} alt="" />
      </div>
      <div
        id="right"
        className="arrow-icon"
        icon={faAngleRight}
        onClick={() => handleArrowClick("right")}
        style={{cursor: "pointer"}}
      >
        <img src={right} height={40} alt="" />
      </div>
      </div>
    </div>
  );
};

export default CardCaro;
