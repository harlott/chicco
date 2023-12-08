const GalleryItem = () => {
  return (
    <>
      <li className="">
        <a href='http://blahlab.com/jekyll/wrap/portfolio/sketch-book/'>
          <img width="500" height="350" alt=""
            src="http://blahlab.com/jekyll/wrap/assets/images/@stock/msn-work-40.jpg" />
          <div className='overlay'>
            <div className='thumb-info'>
              <h3>Sketch book</h3>
              <p>Design &amp; Development</p>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default GalleryItem;
