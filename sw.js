/*导入sw-toolbox库*/
importScripts('./sw-toolbox/sw-toolbox.js');
/*预缓存*/
toolbox.precache(['./js/main.js','./js/article.js', './images/newspaper.svg','./data/latest.json','./data/data-1.json','./article.html','./index.html',]);
/*创建缓存路由*/
toolbox.router.get('./css/(.*)', toolbox.cacheFirst);
