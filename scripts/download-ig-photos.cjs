const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join("public", "images", "z1");
fs.mkdirSync(dir, { recursive: true });

function upscale(url) {
  return url
    .replace("stp=dst-jpg_e35_s640x640_tt6", "stp=dst-jpg_e35_s1080x1080_tt6")
    .replace("stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u", "stp=dst-jpg_e35_s1080x1080_tt6")
    .replace("stp=dst-jpg_s150x150_tt6", "stp=dst-jpg_s1080x1080_tt6");
}

const files = [
  [
    "ig-june10.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/722215715_17875653774671969_3487814211264140606_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=fpHSDfvGPKQQ7kNvwHYkIca&_nc_oc=Adp5G5b7HGC23WTK1L3jg7jnJKbkemBzdUafzKlfKanZEvi6GJuf2tiEuNellc0o0fc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQILPXFp9hKtLGvYKd1rxbIG7VJ8Kltwd4eNb2rooxPJPg&oe=6AB1A7F6",
  ],
  [
    "ig-jeep.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/746119720_17883010581671969_6470947194072894043_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ikgUpxvwNfgQ7kNvwHOPBA9&_nc_oc=AdqKdyfERERlZ3hPDHksoHXZNRgEisRaxBTmuUrxKc8Bhe7FI5NQG1Wj8j4lhpVRb1I&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQLleBBToqnryp3SOx-oFyPco5j_dKP_21LW8JhAwNncUQ&oe=6AB1A7AF",
  ],
  [
    "ig-july09.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/743175315_17881665540671969_7471433616823852177_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=XwcI5eRkd7gQ7kNvwGJQ4C-&_nc_oc=Adp1RY4QzW8km6YpSIOANNBFQQ1vRN_kViQSEbdPyqNB6qeIHsgc1ji5jTFh-rgVwDA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQIVjPTPodsFfwbi7ENhb6yEEE86E64Pn1Hucdpz2cmeEg&oe=6AB1A168",
  ],
  [
    "ig-july08.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/736367147_17881449051671969_1092824053510938868_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ZOT9YNGSNpoQ7kNvwHeIkOQ&_nc_oc=AdqGgxGrDpFram0EqnXF6Vm-AlLApct80fCJNqDjMIdUcUWFnb445gXFlvB8fwp44r8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQKMjUBW2NSLLA6C-vqdmmTtnPrmEDyJ-7gWRMOcfcoOOw&oe=6AB19299",
  ],
  [
    "ig-july06.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/741296577_17880990999671969_2912672970842620120_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=htADc7Db2L4Q7kNvwFBLjFa&_nc_oc=AdplObYyKb8cKFFnF0d3lhif1336uzY44yGO0viDoSIVc3x9vhx9g9APE6zvZvyWX1c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQKOK7u66uRotF935DcVxXRbj03q7xmWuhKPhCPP-C9cVQ&oe=6AB18688",
  ],
  [
    "ig-june26.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/730162997_17878631460671969_1945749907967029466_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=BbesubQD-jsQ7kNvwFTv5DM&_nc_oc=AdpwyKEcfEOSSQdn1MFl6x7p3lYuNcJiyDRn8g0KWEbjd6nw9bActOfTd3iSJ-mZ5qU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQKGTKshTDJJqpCVwlokKciLYOIG2e6swiB6N2hpyeKCHg&oe=6AB18F66",
  ],
  [
    "ig-june24.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/727380875_17878242852671969_2087199496915531455_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=gPnh6HPAGG0Q7kNvwFj5ohj&_nc_oc=Adr5EaTgEXkoHsCPIX96NzeQaSUVFd5THPeOoxTivpKFFg2-ZOHxxPm205_pucgduFI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQKh7PycFp39HtRKrV8i5LyNfTAYnwmB1LyZVQrmyMJh4A&oe=6AB19162",
  ],
  [
    "ig-tagged.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/809201633_18487326820102359_6482408279479808299_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=mEC1ov4T1mYQ7kNvwHHcQcD&_nc_oc=AdozguoYCHqWykfQgc6jk5xcE6cx_NqrkWogxN4pTFxNoidu0VVafR0__p88uyupKBE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EpyVDVrft_bWY6wCud1wPw&_nc_ss=78a8c&oh=00_AQI7GTz8gsQePUS6xGPKRqsx_QqTf3yx-xNBnxp6TO3FDQ&oe=6AB1AC1E",
  ],
  [
    "hl-glass.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/720434860_17875479903671969_8823957105418762424_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=rGyhuFgigT0Q7kNvwFWWgnb&_nc_oc=Adr0AGhwxTvpoKEkR091cE95G_UZ_j2S-ktNPxFtFhEHZGyk32P_-p57nr92tAK2enA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQLUvBh-u8VxTxHJNPGn_j-9w3pr_n-3Lbdwf8mfmswcgQ&oe=6AB1868E",
  ],
  [
    "hl-shop.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/734747251_17880570687671969_5833810679852712932_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=w6PtBrNnwWoQ7kNvwF9v_Sq&_nc_oc=AdpB4WX1q5jUSCpFdDJq-MfvSbS9EDk3hOG7U22HduZo7SkePbnIppWvNF117oZoNpI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQIENu_i0EjVaGjq0yqcKhBJv3OB68LYP_cX-DhAXkoNxA&oe=6AB198F1",
  ],
  [
    "hl-engine.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/720874068_17875612950671969_1379857244282371393_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=joF_9xaYxIwQ7kNvwFOhBV-&_nc_oc=AdoliTdl6jteoNUoTigCXAYNVvb25LvRE8lw66zMhtczCQn6L8p5dErz9uH8g13qDwg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQKYIbSn6U3NSavOn0khY_qjow2d99BHcNQB0HKLvu-vjg&oe=6AB1951C",
  ],
  [
    "hl-polish.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/720417120_17875270683671969_7450233747236727230_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=SIp4ooHzYjwQ7kNvwH3_g--&_nc_oc=AdoTzz3rFCbBf84nXhEUJ9jDKN-nOuvaU3IJQa6BdLQ2SnOAuCVEGFmLOyQ76f-Ujvc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQLHO2E1KBat8g4u2aqdomFovZenBHjbylUi-DCmKrVaMQ&oe=6AB189C4",
  ],
  [
    "hl-underbody.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/713503823_17874133239671969_8464697166734205279_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qpxBd_ZpxsgQ7kNvwG9CxyB&_nc_oc=Adqg2S1gtiTy3J5SOTKLk9I-S8FacAPpwy6kQ2wQoWdB2xEe4Qtg-VTqbFomQNrBJG4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQKfx8-wnnbaafONQSc3k7y2Y6YSgCU4YwAGC-t7HsJpcg&oe=6AB18583",
  ],
  [
    "hl-steam.jpg",
    "https://scontent.cdninstagram.com/v/t51.71878-15/753551386_1014813481372943_3006769769314898863_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=23-AEALNA0UQ7kNvwHdexsl&_nc_oc=AdqQXzyQsWDSM9kafd3jqN-kn_fXcFFbojrLgF69YX0SLUWBk6eyMOVivTIpSSTJzMI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQIU_xXD89DaY8ug6aeMjFPJGmXthZPUhnZXqvpKHOHm3A&oe=6AB1934E",
  ],
  [
    "hl-headlight.jpg",
    "https://scontent.cdninstagram.com/v/t51.82787-15/719524193_17875270980671969_692217810377995818_n.jpg?stp=c0.5x0.5f_dst-jpg_e35_p150x150_tt6_u&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiU1RPUlkuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=6cExtH_EBbYQ7kNvwGnFL44&_nc_oc=AdpbNMxQGwtMDeC2-B7DkJL9eO2uwNW3DHe1rfWrmEZKC7WpXgY3Y32rG67FZuRfYEw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=20ZMKk_Blycw4U-KJfPN1g&_nc_ss=78a8c&oh=00_AQIxtfgnoV1GihQum7N11PHer1mFOHzyZb5zfBn0AjpeXg&oe=6AB1A9FF",
  ],
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
          try {
            fs.unlinkSync(dest);
          } catch {}
          download(name, res.headers.location).then(resolve);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          console.log("FAIL", name, res.statusCode);
          resolve(false);
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("OK", name, fs.statSync(dest).size);
          resolve(true);
        });
      },
    );
    req.on("error", (err) => {
      console.log("ERR", name, err.message);
      resolve(false);
    });
  });
}

(async () => {
  for (const [name, url] of files) {
    const hi = await download(name, upscale(url));
    if (!hi) await download(name, url);
  }
})();
