import React from "react";
import Profile from "./profile";
import SharifLogo from "./sharif_logo";

const users = [
  {
    image: "https://picsum.photos/seed/a/300/300",
    name: "بنیامین بیضایی",
    description: "۹۸۱۰۰۳۵۶",
    email: "benyamin137928@gmail.com",
  },
  {
    image: "https://picsum.photos/seed/b/300/300",
    name: "پویا",
    description: "۹۷۱۰۰۴۴۹",
    email: "benyamin137928@gmail.com",
  },
  {
    image: "https://picsum.photos/seed/c/300/300",
    name: "نازنین",
    description: "۹۸۱۰۰۳۵۶",
    email: "benyamin137928@gmail.com",
  },
  {
    image: "https://picsum.photos/seed/d/300/300",
    name: "فاطمه عسگری",
    description: "۹۷۱۰۰۴۴۹",
    email: "benyamin137928@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-50 px-10 py-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-center md:text-start">
            فاندر‌ها (الکی)
          </h3>
          <div className="grid grid-cols-2 gap-5 mt-3">
            {users.map((user, index) => {
              return <Profile key={index} {...user} />;
            })}
          </div>
        </div>

        <SharifLogo />
      </div>
    </footer>
  );
}

export default Footer;
