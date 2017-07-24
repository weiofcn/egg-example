exports.keys = '123456789';
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
exports.news = {
  pageSize: 50,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
  'robot'
];
// robot's configurations
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};