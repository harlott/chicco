import Hero from "./Hero";
import EpSection from "./EpSection";
import SocialSection from './SocialSection';

const TopNavbar = () => (
  <>
    <a id='top'></a>
    <div className='transparent fullwidth white fixed contain-to-grid '>
      <nav className='top-bar onepage' data-options='' data-topbar=''>
        <ul className='title-area'>
          <li className='name'>
            <h1>
              <a href=''>
                <img width="126" height="48" alt="" src="" />
              </a>
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

const JungleCiuri = ({ data }) => {
  return (
    <div id="main" className="top-shift">
      <Hero
        title1={data?.hero?.title1}
        title2={data?.hero?.title2}
        title3={data?.hero?.title3}
        subheading={data?.hero?.subheading}
        subheadingContact={data?.hero?.subheadingContact}
        email={data?.email}
        videoMp4={data?.hero?.videoMp4}
        videoWebm={data?.hero?.videoWebm}
        poster={data?.hero?.poster}
      />
      <SocialSection />
      <EpSection
        pretitle={data?.epSection?.preTitle}
        title={data?.epSection?.title}
        image={data?.epSection?.image}
        text={data?.epSection?.text}
        content={data?.epSection?.content}
      />
    </div>
  );
};

export default JungleCiuri;
