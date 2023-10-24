import fs from 'fs'
import path from 'path'
import { uid } from 'uid'

const MakeScrenshot = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const screenshotBuffer = await page.screenshot();

    const fileName = `${uid(20)}.jpg`

    const screenshotPath = path.join(path.dirname('./public/uploads/'), 'uploads', fileName);

    fs.writeFileSync(screenshotPath, screenshotBuffer);

    return fileName
}

export default MakeScrenshot