import React from 'react';

function SharifLogo() {
  return (
    <div className="mt-10 flex flex-col items-center sm:mt-0">
      <img
        className="h-32 w-32"
        src="https://upload.wikimedia.org/wikipedia/fa/thumb/a/a9/Sharif_logo.svg/1200px-Sharif_logo.svg.png"
        alt="sharif logo"
      />
      <div className="text-center text-xs">
        <h4 className="font-bold">دانشکده مهندسی کامپیوتر</h4>
        <h4 className="font-bold">دانشگاه صنعتی شریف</h4>
        <h4>۱۴۰۱-۰۱</h4>
      </div>
    </div>
  );
}

export default SharifLogo;
