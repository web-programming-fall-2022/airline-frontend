import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import TicketCart from '../components/ticket_card';

function TicketListPage() {
  return (
    <section className="mx-10 my-10 min-h-screen">
      <h3 className="mb-10 text-2xl font-black">نتایج جستجوی شما</h3>
      <TicketCart
        origin={'تهران'}
        destination={'میانه'}
        isLimited={true}
        startDate={Date.now()}
        endDate={Date.now()}
        trailing={
          <div className="flex h-full w-full flex-col gap-2 md:flex-row">
            <Link
              to={'/'}
              className="flex h-full w-full flex-col items-start gap-5 rounded-lg border bg-white p-5 hover:cursor-pointer hover:bg-slate-500 hover:text-white">
              <p>خرید بیزینس</p>
              <p>3850000 ریال</p>
            </Link>
            <Link
              to={'/'}
              className="flex h-full w-full flex-col items-start gap-5 rounded-lg border bg-white p-5 hover:cursor-pointer hover:bg-slate-500 hover:text-white">
              <p>خرید اکونومی</p>
              <p>3850000 ریال</p>
            </Link>
          </div>
        }
      />
    </section>
  );
}

export default TicketListPage;
