import React from 'react';
import TicketCart from '../components/ticket_card';

function MyTripsPage() {
  return (
    <section className="mx-10 my-10 min-h-screen">
      <h3 className="mb-10 text-2xl font-black">سفرهای من</h3>
      <TicketCart
        origin={'تهران'}
        destination={'میانه'}
        isLimited={true}
        startDate={Date.now()}
        endDate={Date.now()}
        trailing={
          <div className="flex h-full w-full flex-col gap-2 md:flex-row">
            <div className="flex h-full w-full flex-col items-start gap-5 rounded-lg border bg-white p-5">
              <p>قیمت خرید</p>
              <p>3850000 ریال</p>
            </div>
          </div>
        }
      />
    </section>
  );
}

export default MyTripsPage;
