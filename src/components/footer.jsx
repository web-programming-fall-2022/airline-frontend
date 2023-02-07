import React from "react";
import Profile from "./profile";
import SharifLogo from "./sharif_logo";

const users = [
  {
    image: "https://avatars.githubusercontent.com/u/29250042?v=4",
    name: "بنیامین بیضایی",
    description: "۹۸۱۰۰۳۵۶",
    email: "benyamin137928@gmail.com",
  },
  {
    iamge: "https://avatars.githubusercontent.com/u/46162834?v=4",
    name: "امیرمحمد شعبانی",
    description: "۹۷۱۰۰۴۴۹",
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
          <div className="flex flex-col  gap-5 mt-3">
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
