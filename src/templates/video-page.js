import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VideoPageTemplate = ({ title, videos }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section ">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {videos.map(video => (
                <div className="video-container">
                  <h3>{video.title}</h3>
                  <iframe
                    src={video.url}
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

VideoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    videos: PropTypes.array,
  }),
}

const VideoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VideoPageTemplate
        title={frontmatter.title}
        videos={frontmatter.intro.videos}
      />
    </Layout>
  )
}

VideoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VideoPage

export const videoPageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        intro{
          videos{
            title,
            url
          }
        }
      }
    }
  }
`
