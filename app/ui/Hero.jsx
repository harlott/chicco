import { useEffect, useRef, useState } from "react";

const HeroVideoSources = (props) => {
  return (
    <>
      {props?.videoWebm &&
        <source src={props?.videoWebm} type='video/webm' />
      }
      {props?.videoMp4 &&
        <source src={props?.videoMp4} type='video/mp4' />
      }
    </>
  );
};

const Hero = ({
  title1,
  title2,
  title3,
  subheading,
  subheadingContact,
  email,
  videoMp4,
  videoWebm,
  poster,
}) => {
  const videoRef = useRef(null);
  const [canUseSources, setCanUseSources] = useState(false);
  useEffect(() => {
    if (window.screen.width > 920) {
      videoRef.current.poster = poster || '/app-media/chicco-top-poster.jpg';
      videoRef.current.play();
      setCanUseSources(true);
    } else {
      videoRef.current.style = `
        background-image: url(${poster || '/app-media/chicco-top-poster.jpg'});
        background-position: center;
        background-size: cover;
        width: 100%;
        height: inherit;
        background-repeat: no-repeat;
      `;
    }
  }, []);

  return (
    <div id="hero" className='full no-padding home-video-wrapper'>
      <div className='fullscreen'>
        <video
          autoPlay
          loop
          muted
          ref={videoRef}
        >
          {canUseSources === true &&
            <HeroVideoSources videoWebm={videoWebm} videoMp4={videoMp4} />
          }
        </video>
        <div className='overlay'></div>
        <div className='layer'>
          <h1 className='thin' id="to-be-update">
            {title1 &&
              <><span className="fir">{ title1 || 'Chicco Allotta,'}</span><br /></>
            }
            {
              title2 &&
              <><span className="sec">{ title2 || 'Pianist'}</span><br /></>
            }
            {title3 &&
              <span className="thir">{ title3 || 'in London!'}</span>
            }
          </h1>
          <h2 className='thin'>
            {subheading || 'Always available for new projects as musician, musical director and arranger.'}
            <a href="https://www.facebook.com/chicco.allotta.9" target="_blank" rel="noopener noreferrer">{subheadingContact || ' Contact me on Facebook'}</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;