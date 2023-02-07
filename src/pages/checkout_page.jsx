import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../components/input";
import PrimaryButton from "../components/primary_button";

function CheckoutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center m-5">
      <section className="border rounded-lg p-5 w-full max-w-4xl">
        <div className="w-full flex flex-col md:flex-row items-center text-center md:text-start mt-10 gap-5">
          <FontAwesomeIcon
            className="bg-purple-600 rounded-full w-20 h-20 p-6 fa-2x text-white"
            icon={faCartShopping}
          />

          <div>
            <h3 className="text-xs font-light">خرید از حبیب</h3>
            <p className="text-xl font-bold">تهران به میانه</p>
            <p className="text-sm font-light">
              تاریخ: ۱۳۹۸/۱۲/۲۰ | ساعت: ۲۰:۳۴
            </p>
            <p className="text-sm font-light">قیمت: ۴۰۰۰۰ هزار تومان</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4 my-5">
          <Input label={"نام"} />
          <Input label={"نام خانوادگی"} />
          <Input label={"شماره پاسپورت"} />
        </div>
        <PrimaryButton title={"پرداخت"}></PrimaryButton>
      </section>
    </div>
  );
}

export default CheckoutPage;
