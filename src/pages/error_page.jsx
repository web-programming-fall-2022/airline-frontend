import React from "react";

function ErrorPage() {
  return (
    <section className="flex items-center justify-center mx-10 my-10">
      <div className="flex flex-col items-center">
        <img
          className="max-w-xl"
          src="https://cdn-icons-png.flaticon.com/512/5841/5841587.png"
          alt="404"
        />
        <h3 className="text-2xl font-black text-center">
          حبیب صفحه مورد نظر را پیدا نکرد!
        </h3>
      </div>
    </section>
  );
}

export default ErrorPage;
