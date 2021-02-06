module.exports = {
  service1: {
    api: '/rooms/:propertyId/booking',
    cal: '/rooms/:propertyId/booking/calendar',
    url: 'http://ec2-3-12-85-73.us-east-2.compute.amazonaws.com:3001',
    bundle: 'bundle.js',
  },
  service2: {
    api: '/rooms/:propertyId/reviews',
    url: 'http://3.86.84.247',
    bundle: 'bundle.js',
  },
  service3: {
    api: '/home/:id/photos',
    url: 'http://3.19.213.23',
    bundle: 'bundle.js',
  },
};
