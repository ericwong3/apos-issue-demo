// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
  park: [
    {
      slug: '/news',
      parkedId: 'news',
      type: 'news-pages',
      published: true,
      trash: false,
      _defaults: {
        title: 'News',
      }
    },
    {
      slug: '/locations',
      parkedId: 'locations-map',
      type: 'locations-pages',
      published: true,
      trash: false,
      _defaults: {
        title: 'Locations',
      }
    },
  ]
};
