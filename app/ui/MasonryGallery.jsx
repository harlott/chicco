import '../../styles/masonry-gallery.css';

const MasonryGallery = ({ media }) => {
  let orderClass = null;
  let blockLevel = 2;
  let elementCounter = 1;
  let orderCounter = 'asc';

  const setBlockLevelByCounter = (level) => {
    if (level === 3) return 'BlogRoll__entries-container__entry-block__level-three';
    if (level === 2) return 'BlogRoll__entries-container__entry-block__level-two';
    return 'BlogRoll__entries-container__entry-block__level-one';
  }

  return (
    <>
      <a id='works'></a>
      <div className="BlogRoll__entries-container">
        {media.map((currentPost, index) => {
          const { title, image } = currentPost;
          orderClass = setBlockLevelByCounter(blockLevel);

          if (elementCounter === blockLevel) {
            if (blockLevel === 3) {
              orderCounter = 'dsc';
            } else if (blockLevel === 1) {
              orderCounter = 'asc';
            }

            elementCounter = 1;
            if (orderCounter === 'asc') {
              blockLevel++;
            }
            else if (orderCounter === 'dsc') {
              blockLevel--;
            }
          } else {
            elementCounter++;
          }


          return (
            <a key={`BlogRoll-post-${index}`} className={`BlogRoll__entries-container__entry-block ${orderClass}`}>
              {!!image &&
                <>
                  <div className="BlogRoll__entries-container__entry-block__entry-image">
                    <img
                      src={image}
                    />
                  </div>
                  <div className="overlay">
                    <div className="thumb-info">
                      <h3>{title}</h3>
                    </div>
                  </div>
                </>
              }
            </a>
          );
        })}
      </div>
    </>
  );
}

export default MasonryGallery;
