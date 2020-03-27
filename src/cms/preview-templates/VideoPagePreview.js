import React from 'react'
import PropTypes from 'prop-types'
import { VideoPageTemplate } from '../../templates/video-page'

const VideoPagePreview = ({ entry }) => {
  const entryVideos = entry.getIn(['data', 'intro', 'videos'])
  const videos = entryVideos ? entryVideos.toJS() : []
  return (
    <VideoPageTemplate
      title={entry.getIn(['data', 'title'])}
      videos={videos}
    />
  )
}



VideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default VideoPagePreview
