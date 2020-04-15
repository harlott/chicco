import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import facebook from '../img/social/facebook.svg'
import youtube from '../img/social/youtube.svg'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description} <br /> <Link to="/about">[Read More]</Link></h3>
                  </div>
                  <div className="columns is-multiline">
                  <div className="column is-12 social">
                    <a title="facebook" href="https://www.facebook.com/chicco.allotta.9" className="social__item">
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="social__item__image"
                        style={{ width: '2.5em', height: '2.5em' }}
                      />
                    </a>
                    <a title="youtube" href="https://www.youtube.com/channel/UCr3dLDc2MUMauvexqzBIZsA" className="social__item">
                      <img
                        src={youtube}
                        alt="youtube"
                        className="social__item__image"
                        style={{ width: '2.5em', height: '2.5em' }}
                      />
                    </a>
                  </div>
                    {intro.blurbs.map(item => (
                      <div key={item.text} className="column is-10">
                        <div style={{
                          width: '100%',
                          paddingTop: '40%',
                          backgroundImage: `url(${!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image})`, 
                          backgroundPosition: 'top middle',
                          backgroundRepeat: 'no-repeat',
                          position: 'relative',
                          }} >
                          <span style={{
                            color: 'white',
                            fontSize: '1.5em',
                            display: 'inline-block',
                            width: '85%',
                            position: 'absolute',
                            top: '30%',
                            left: 0,
                            background: 'rgba(0,0,0, 0.6)',
                            paddingLeft: '2em',
                          }}>{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
