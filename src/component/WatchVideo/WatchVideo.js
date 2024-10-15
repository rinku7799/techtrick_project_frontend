import React, { useState } from "react";
import { Collapse, Container } from "react-bootstrap";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import "./WatchVideo.css";

const WatchVideo = ({ step }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); 
  };

  const videoItems = step?.childes || [];

  if (!step || !step.childes || step.childes.length === 0) {
    return null; 
  }

  return (
    <>
      <div
        className="fs-2 text-center fw-bolder py-md-4"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {step?.maintitle}
      </div>
      <div
        className="fs-2 text-center fw-bolder py-md-4"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {step?.subtitle}
      </div>

      <div className="watch-video-wrapper">
        <Container>
          <div className="row text-center">
            <div className="col-lg-6 col-12">
              <p className="text-start">{step?.title}</p>
              <div>
                {videoItems?.map((element, index) => (
                  <div key={index} className="border-bottom-1">
                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => handleToggle(index)}
                      aria-controls={`example-collapse-text-${index}`}
                      aria-expanded={openIndex === index}
                    >
                      <div className="d-flex gap-3 align-items-center">
                        <div className="number">{index + 1}</div>
                        <div className="text">{element?.title}</div>
                      </div>
                      <div>
                        {openIndex === index ? (
                          <IoCloseSharp />
                        ) : (
                          <IoAddSharp />
                        )}
                      </div>
                    </div>
                    <Collapse in={openIndex === index}>
                      <div
                        className="mt-2 text-start"
                        id={`example-collapse-text-${index}`}
                      >
                        {element?.description || "No description available."}
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 col-12 p-4">
              {step.videourl ? (
                <>
                  <div className="video-div">
                    <ReactPlayer
                      url={step.videourl}
                      controls
                      playing={isPlaying} 
                      className="react-video-card"
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }}
                    />
                  </div>
                  <button onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Watch Now"}
                  </button>
                </>
              ) : step.video ? (
                <>
                  <div className="video-div">
                    <ReactPlayer
                      url={step.video}
                      controls
                      playing={isPlaying}
                      className="react-video-card"
                    />
                  </div>
                  <button onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Watch Now"}
                  </button>
                </>
              ) : (
                <img
                  src={step.image}
                  alt="Video Placeholder"
                  className="img-fluid image1"
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WatchVideo;
