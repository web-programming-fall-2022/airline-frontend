import React from "react";
import Input from "../components/input";
import PrimaryButton from "../components/primary_button";

function LoginPage() {
  var authenticated = false;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="max-w-2xl border rounded-lg p-5 m-10">
        <div className="flex flex-col items-end">
          <img
            src="https://avatars.githubusercontent.com/u/118119270?s=200&v=4"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-xl font-black my-5">ورود به دنیای حبیب</h2>
        <p className="mb-4">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت
          بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در
          صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای
          نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات
          را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
        {authenticated && (
          <div className="w-full">
            <p className="mb-5 text-red-800">
              برای ورود با اکانتی دیگر ابتدا خارج شوید
            </p>
            <PrimaryButton title={"خروج"} type={"danger"} />
          </div>
        )}
        {!authenticated && (
          <div className="w-full">
            <Input
              label={"ایمیل"}
              type={"email"}
              placeholder={"john@gmail.com"}
              required={true}
            />
            <Input
              label={"رمز عبور"}
              type={"password"}
              placeholder={"********"}
              required={true}
            />
            <div className="mt-5">
              <PrimaryButton title={"ورود"} />
            </div>
            <div className="mt-5">
              <PrimaryButton title={"ادامه بدون ثبت نام"} type={"secondary"} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default LoginPage;
