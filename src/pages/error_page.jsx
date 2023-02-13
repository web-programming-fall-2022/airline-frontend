import React from 'react';

function ErrorPage() {
  return (
    <section className="mx-10 my-10 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          className="max-w-xl"
          src="https://cdn-icons-png.flaticon.com/512/5841/5841587.png"
          alt="404"
        />
        <h3 className="text-center text-2xl font-black">
          حبیب صفحه مورد نظر را پیدا نکرد!
        </h3>
      </div>
    </section>
  );
}

export default ErrorPage;
