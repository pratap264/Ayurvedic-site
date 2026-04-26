import sharp from 'sharp';

const collage = 'src/assets/collage.jpg';

// Collage image is 1020x660px
// Hero backgrounds are in section "1. HERO BACKGROUNDS (3 VARIATIONS)" top-left
// Visual estimate of crop coordinates:
// BG1 (green spiral/leaves): left=4, top=103, width=209, height=112
// BG2 (warm beige peach): left=214, top=103, width=225, height=112
// BG3 (dark green/teal): left=440, top=103, width=205, height=112

await sharp(collage).extract({ left: 4, top: 103, width: 209, height: 112 }).resize(1920, 1080, { fit: 'cover' }).toFile('src/assets/hero_bg1.jpg');
console.log('hero_bg1 done');

await sharp(collage).extract({ left: 214, top: 103, width: 225, height: 112 }).resize(1920, 1080, { fit: 'cover' }).toFile('src/assets/hero_bg2.jpg');
console.log('hero_bg2 done');

await sharp(collage).extract({ left: 440, top: 103, width: 205, height: 112 }).resize(1920, 1080, { fit: 'cover' }).toFile('src/assets/hero_bg3.jpg');
console.log('hero_bg3 done');
