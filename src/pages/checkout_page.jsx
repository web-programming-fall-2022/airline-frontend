import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../components/input';
import PrimaryButton from '../components/primary_button';

function CheckoutPage() {
  return (
    <div className="m-5 flex min-h-screen flex-col items-center justify-center">
      <section className="w-full max-w-4xl rounded-lg border p-5">
        <div className="mt-10 flex w-full flex-col items-center gap-5 text-center md:flex-row md:text-start">
          <FontAwesomeIcon
            className="fa-2x h-20 w-20 rounded-full bg-purple-600 p-6 text-white"
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
        <div className="my-5 flex flex-col gap-0 md:flex-row md:items-center md:gap-4">
          <Input label={'نام'} />
          <Input label={'نام خانوادگی'} />
          <Input label={'شماره پاسپورت'} />
        </div>
        <PrimaryButton title={'پرداخت'}></PrimaryButton>
      </section>
    </div>
  );
}

export default CheckoutPage;
