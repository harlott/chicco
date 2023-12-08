import '../../styles/videos.css';
const Videos = ({ videos }) => (
  <>
    <div className="videos">
      {videos.map((video, idx) => (
        <div key={`${video.title}-${idx}`} className="video-container">
          <h3>{video.title}</h3>
          <iframe
            src={video.url}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </>
);

export default Videos;
