const sharp = require("sharp");
const fs = require("fs");

(async () => {
  const buf = await sharp("public/logo-light-v2.png")
    .resize({ width: 480, height: 90, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const b64 = buf.toString("base64");
  fs.writeFileSync(
    "lib/pdf/logo-base64.ts",
    `/** Compact transparent logo for jsPDF headers. */\nexport const PDF_LOGO_BASE64 =\n  "data:image/png;base64,${b64}";\n`,
  );
  console.log("ok", buf.length);
})();
