

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 定义跳转的URL数组
  const urls = [
    'https://www.mfa.gov.cn/eng/topics_665678/ddzggcd/', // URL
    'https://news.cnr.cn/dj/sz/20221029/t20221029_526045005.shtml' // URL
  ]

  // 随机选择一个URL
  const destinationUrl = urls[Math.floor(Math.random() * urls.length)]

  // 执行302重定向
  return Response.redirect(destinationUrl, 302)
}
