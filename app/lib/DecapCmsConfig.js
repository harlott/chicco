const HOME_PAGE = {
  file: "data/home-page.md",
  label: "Home Page",
  name: "index",
  fields: [
    {
      label: 'SEO',
      name: 'seo',
      widget: 'object',
      fields: [
        {label: 'Titolo pagina', name: 'title', widget: 'string'},
        {label: 'Descrizione', name: 'description', widget: 'string'},
        {label: 'Immagine', name: 'image', widget: 'image'}
      ]
    },
    {label: 'Indirizzo email', name: 'email', widget: 'string'},
    {
      label: 'HERO',
      name: 'hero',
      widget: 'object',
      fields: [
        {label: 'Titolo Riga 1', name: 'title1', widget: 'string'},
        {label: 'Titolo Riga 2', name: 'title2', widget: 'string'},
        {label: 'Titolo Riga 3', name: 'title3', widget: 'string'},
        {label: 'Testo', name: 'subheading', widget: 'string'},
        {label: 'Testo contatto', name: 'subheadingContact', widget: 'string'},
        {label: 'Video .mp4', name: 'videoMp4', widget: 'file'},
        {label: 'Video .webm', name: 'videoWebm', widget: 'file'},
        {label: 'Poster', name: 'poster', widget: 'image'}
      ]
    },
    {
      label: 'Intro Sezione Video',
      name: 'videoGallery',
      widget: 'object',
      fields: [
        {label: 'Pre titolo', name: 'preTitle', widget: 'string'},
        {label: 'Titolo', name: 'title', widget: 'string'},
        {label: 'Testo', name: 'text', widget: 'string'},
        {label: 'Immagine', name: 'image', widget: 'image'},
      ],
    },
    {
      label: 'YouTube Video urls',
      name: 'videos',
      widget: 'list',
      fields: [
        {label: 'Titolo', name: 'title', widget: 'string'},
        {label: 'url', name: 'url', widget: 'string'},
      ],
    },
    {
      label: 'Intro Sezione Galleria Immagini',
      name: 'photoGallery',
      widget: 'object',
      fields: [
        {label: 'Pre titolo', name: 'preTitle', widget: 'string'},
        {label: 'Titolo', name: 'title', widget: 'string'},
        {label: 'Testo', name: 'text', widget: 'string'},
        {label: 'Immagine', name: 'image', widget: 'image'},
      ],
    },
    {
      label: 'Galleria Immagini',
      name: 'photos',
      widget: 'list',
      fields: [
        {label: 'Titolo', name: 'title', widget: 'string'},
        {label: 'Immagine', name: 'image', widget: 'image'},
      ],
    },

  ]
};

const DECAP_CMS_COLLECTIONS = [{
  name: 'pages',
  label: 'Pagine',
  files: [
    HOME_PAGE
  ],
}];

const DECAP_CMS_CONFIG = {
  backend: {
    name: 'github',
    branch: 'master',
    repo: 'harlott/chicco',
    base_url: 'https://chicco-cms-auth.onrender.com/',
    show_preview_links: true
  },
  publish_mode: 'editorial_workflow',
  media_folder: '/public/media',
  public_folder: '/media',
  slug: {
    encoding: 'ascii',
    clean_accents: true,
  },
  collections: DECAP_CMS_COLLECTIONS
};

export default DECAP_CMS_CONFIG;
