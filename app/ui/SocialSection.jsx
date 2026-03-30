import Link from 'next/link';

function SocialSection() {
  return(
    <div className="row" style={{ marginTop: '4%' }}>
      <div className="large-8 columns large-centered">
        <div className="section-title">
          <Link href="/">Facebook</Link> | <Link href="/">Instagram</Link> | <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
