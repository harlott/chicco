export default function SectionIntro({
  pretitle,
  title,
  text,
  image
}){
  return (
    <div className="full">
      <div className="row">
        <div className="large-8 columns large-centered">
          <div className="section-title">
            <p className="small-title">{pretitle || 'Creative experience'}</p>
            <h2>
              {title || 'Creating solutions is what we do best.'}
            </h2>
            <p className="big-size">{text || 'We are creating solutions for any visual identity project, espetically for digital experiences and brand identities.'}</p>
            <div className="four spacing"></div>
            <img src={image || '/img/chicco_logo_120x161.png'} alt="" />
          </div>
        </div>
        <div className="four spacing"></div>
      </div>
    </div>
  );
};
