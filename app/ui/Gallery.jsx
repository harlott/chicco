import GalleryItem from "./GalleryItem";
const Gallery = ({ galleryTitle, gallerySubtitle, media}) => {
  return (
    <>
      <a id='works'></a>
      <div className='full'>
        <div className='row'>
          <div className='large-8 columns large-centered'>
            <div className="section-title">
              <p className="small-title">{galleryTitle || 'take a look'}</p>
              <h2>{gallerySubtitle || 'What we recently do.'}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='full no-padding' id="demo-1-works">
        <div className='mod modMasonryGallery'>
          <ul className='gallery'>
            <GalleryItem />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Gallery;