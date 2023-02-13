import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import TicketCart from "../components/ticket_card";

function TicketListPage() {
  return (
    <section className="mx-10 my-10 min-h-screen">
      <h3 className="text-2xl font-black mb-10">نتایج جستجوی شما</h3>
      <TicketCart
        origin={"تهران"}
        destination={"میانه"}
        isLimited={true}
        startDate={Date.now()}
        endDate={Date.now()}
        trailing={
          <div className="flex flex-col md:flex-row gap-2 w-full h-full">
            <Link
              to={"/"}
              className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg w-full h-full hover:bg-slate-500 hover:cursor-pointer hover:text-white"
            >
              <p>خرید بیزینس</p>
              <p>3850000 ریال</p>
            </Link>
            <Link
              to={"/"}
              className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg w-full h-full hover:bg-slate-500 hover:cursor-pointer hover:text-white"
            >
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
