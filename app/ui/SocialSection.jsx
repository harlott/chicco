import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SocialSection() {
  return(
    <div className="row" style={{ marginTop: '4%' }}>
      <div className="large-8 columns large-centered">
        <div className="section-title">
          <Link href="/"><span className="fa-brands fa-facebook" style={{ color: '#1877f2', fontSize: '48px' }} /></Link> | <Link href="/"><span className="fa-brands fa-instagram" style={{ color: '#e4405f', fontSize: '48px' }} /></Link> | <Link href="/"><span className="fa-brands fa-youtube" style={{ color: '#ff0000', fontSize: '48px' }} /></Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
