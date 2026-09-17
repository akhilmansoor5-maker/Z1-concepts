const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join("public", "images", "z1");
fs.mkdirSync(dir, { recursive: true });

const files = [
  [
    "maps-shop-1.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPVPrWjyDUHleLmcS_WClrVEMIduyUhKqk_IN_C8hy1BgQZmCM5VuGeijf4jbbs_jctOtCkg7-OhHff2hVM9z7mCcqwsaO1PVfjrQu1BzdKqMFDN75CR_g3mEA1oE6lc6yI5-qndDrC5C8=s1600",
  ],
  [
    "maps-shop-2.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMEhTezGRjeKDZaornpPB_VOM01UQLoAp0BUEjGF1Zb7OIkJTjkxJ7c2xMhToBN87wqGOzyD3MNo8lLYPkEZ1WZRUGsViFcQZkWYbBkbmyKkYRKBQLAUlFsjs8xxB_-dAMqa-BERIj-pI=s1600",
  ],
  [
    "maps-shop-3.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkme6YbEoLMDUM8_SvmFd1CJCG0zabAVf3oDJ4oM96LyWhS8gvmuluplrOrcq5xoSm4cnwfGEyhM08rT8JVTv_M3VvCwVKBwsNg77Iae_oim5hoZe5nA1sMGtdPHXcCaLc47m1niKJ3MAHm=s1600",
  ],
  [
    "maps-shop-4.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm88K8bzou8U2gAEycVpTSPJeCTIzJvHsTMhD6YnwOx2daRHBZL37Qubwhzeo6FIqQvlDjlVWDUHvU5FwfQZgNsPiA3cTchb62pgL844T02exEBGYAN5rNBK3uipgUw9nYZaVmd0xyJrMGM=s1600",
  ],
  [
    "maps-shop-5.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlsm2tuG_ZTfvQycD0gu9RiWBxr535aq_5jOmcnN-oA1F2JiPwRKrjlUjemcMRiJePeyXHf1IPnCIFKtG9YPBFHwm1U_g1B-3eSnAboq9rnDozmb0ebN6PxpAt7O_IR6KubJQ6zVic3-q50=s1600",
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
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(name, res.statusCode, fs.statSync(dest).size);
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
  for (const [name, url] of files) await download(name, url);
})();
