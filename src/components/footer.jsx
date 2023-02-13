import React from 'react';
import Profile from './profile';
import SharifLogo from './sharif_logo';

const users = [
  {
    image: 'https://picsum.photos/seed/a/300/300',
    name: 'بنیامین بیضایی',
    description: '۹۸۱۰۰۳۵۶',
    email: 'benyamin137928@gmail.com',
  },
  {
    image: 'https://picsum.photos/seed/b/300/300',
    name: 'پویا',
    description: '۹۷۱۰۰۴۴۹',
    email: 'benyamin137928@gmail.com',
  },
  {
    image: 'https://picsum.photos/seed/c/300/300',
    name: 'نازنین',
    description: '۹۸۱۰۰۳۵۶',
    email: 'benyamin137928@gmail.com',
  },
  {
    image: 'https://picsum.photos/seed/d/300/300',
    name: 'فاطمه عسگری',
    description: '۹۷۱۰۰۴۴۹',
    email: 'benyamin137928@gmail.com',
  },
];

function Footer() {
  return (
    <footer className="bg-gray-50 px-10 py-8">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-center text-lg font-bold md:text-start">
            فاندر‌ها (الکی)
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-5">
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
