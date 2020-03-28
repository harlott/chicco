import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import VideoPagePreview from './preview-templates/VideoPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectsPostPreview from './preview-templates/ProjectsPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('projects', ProjectsPostPreview)
CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
CMS.registerPreviewTemplate('video', VideoPagePreview)
