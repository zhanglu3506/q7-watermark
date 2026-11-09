// ============================================================
//  只需要改这个文件。改完重新部署即可，理发师那边不用做任何事。
// ============================================================
window.BARBER_CONFIG = {
  // 水印上显示的店名
  shopName: 'Q7 Hair Salon',

  // Cal.com 预约链接（TODO：注册 Cal.com 后换成真实链接，建议用户名 q7hair → https://cal.com/q7hair）
  // 还是占位链接时，工具顶部会显示红色提醒，避免带着错误二维码发出去
  bookingUrl: 'https://cal.com/your-name',

  // 普通版（Instagram / Facebook / TikTok / 小红书）水印第二行文字
  // 客人在 Milpitas，以英文为主
  normalCaption: 'Henry · Book via link in bio',

  // 微信版二维码下面的文字
  wechatCaption: '长按识别 · 在线预约 Henry',

  // Logo 图片文件名（放在本文件夹里，比如 'logo.png'）。留空 = 用 ✂ 图标
  logo: '',
};
