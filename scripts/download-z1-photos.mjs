const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join("public", "images", "z1");
fs.mkdirSync(dir, { recursive: true });

const files = [
  ["ig-ppf-ad.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/775106762_17889719811671969_8657743092505159668_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-june10.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/722215715_17875653774671969_3487814211264140606_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-jeep.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/746119720_17883010581671969_6470947194072894043_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-july09.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/743175315_17881665540671969_7471433616823852177_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-july08.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/736367147_17881449051671969_1092824053510938868_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-july06.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/741296577_17880990999671969_2912672970842620120_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-june26.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/730162997_17878631460671969_1945749907967029466_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-june24.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/727380875_17878242852671969_2087199496915531455_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-ceramic-ad.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/780127120_17890399113671969_7801428232390275807_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["ig-tagged.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/809201633_18487326820102359_6482408279479808299_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-ppf.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/786914263_17891256573671969_8631691076193296748_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-glass.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/720434860_17875479903671969_8823957105418762424_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-shop.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/734747251_17880570687671969_5833810679852712932_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-engine.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/720874068_17875612950671969_1379857244282371393_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-borophene.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/705981938_17872750812671969_5807815966629209821_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-polish.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/720417120_17875270683671969_7450233747236727230_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-underbody.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/713503823_17874133239671969_8464697166734205279_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-ceramic.jpg", "https://scontent.cdninstagram.com/v/t51.71878-15/729896881_2204853133579191_3887197913917373999_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-steam.jpg", "https://scontent.cdninstagram.com/v/t51.71878-15/753551386_1014813481372943_3006769769314898863_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
  ["hl-headlight.jpg", "https://scontent.cdninstagram.com/v/t51.82787-15/719524193_17875270980671969_692217810377995818_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6"],
];

function download(name, url) {
  return new Promise((resolve) => {
    const dest = path.join(dir, name);
    const file = fs.createWriteStream(dest);
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          Referer: "https://www.instagram.com/",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(name, res.headers.location).then(resolve);
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          const size = fs.statSync(dest).size;
          console.log(name, res.statusCode, size);
          resolve();
        });
      },
    );
    req.on("error", (err) => {
      console.log("ERR", name, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const [name, url] of files) {
    await download(name, url);
  }
})();
