import Hero from "./Hero";
import SectionIntro from "./SectionIntro";
import MasonryGallery from './MasonryGallery';
import Videos from "./Videos";

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

const HomePage = ({ data }) => {
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
      <SectionIntro
        pretitle={data?.videoGallery.preTitle}
        title={data?.videoGallery.title}
        image={data?.videoGallery.image}
        text={data?.videoGallery.text}
      />
      <Videos videos={data?.videos || []} />
      <SectionIntro
        pretitle={data?.photoGallery.preTitle}
        title={data?.photoGallery.title}
        image={data?.photoGallery.image}
        text={data?.photoGallery.text}
      />
      <MasonryGallery media={data?.photos || []}/>
    </div>
  );
};

export default HomePage;
