import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [audio] = useState(new Audio("/videos/Sound.mp3")); // Audio file path
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Video paths
  const videos = [
    "/videos/vedio2.mp4",
    "/videos/vedio1.mp4",
    "/videos/vedio3.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextVideo();
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

    

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  console.log("Rendering Hero component with videos:", videos);
  console.log("Current video index:", currentVideoIndex);

  return (
    <div className="homepage">
      <div className="hero-slider">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`slide ${index === currentVideoIndex ? "active" : ""}`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              className="slider-video"
              onLoadedData={() => {
                console.log(`Video loaded successfully: ${video}`);
              }}
              onError={(e) => {
                console.error(`Error loading video: ${video}`, e);
                e.target.style.display = "none";
                e.target.parentNode.querySelector(".video-fallback").style.display = "block";
              }}
            />
           
            <div
              className="video-fallback"
              style={{
                display: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "24px",
                backgroundColor: "rgba(0,0,0,0.7)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p>Video failed to load</p>
              <p style={{ fontSize: "16px", marginTop: "10px" }}>Check console for errors</p>
            </div>
          </div>
        ))}
      </div>

      
      <button className="slider-arrow slider-arrow-left" onClick={goToPrevVideo}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={goToNextVideo}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="homeInfo-title">
        <div className="title-name">
          <div className="title-sub-name">
            <h1>KJEI Racers</h1>
          </div>
          <div className="title-spec">
            <h1>Baja</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;