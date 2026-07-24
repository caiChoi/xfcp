const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch();

  // 手机端：iPhone 13 视口
  const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const mp = await mob.newPage();
  await mp.goto('http://127.0.0.1:8765/index.html', { waitUntil: 'networkidle' });
  await mp.screenshot({ path: 'D:/web/xfcp/xfcp/screenshots/mobile.png', fullPage: true });

  // PC 端：1280x800
  const pc = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const pp = await pc.newPage();
  await pp.goto('http://127.0.0.1:8765/index.html', { waitUntil: 'networkidle' });
  await pp.screenshot({ path: 'D:/web/xfcp/xfcp/screenshots/pc.png', fullPage: true });

  await browser.close();
  console.log('done');
})();
