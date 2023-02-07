import React from "react";
import TicketCart from "../components/ticket_card";

function MyTripsPage() {
  return (
    <section className="mx-10 my-10 min-h-screen">
      <h3 className="text-2xl font-black mb-10">سفرهای من</h3>
      <TicketCart
        origin={"تهران"}
        destination={"میانه"}
        isLimited={true}
        startDate={Date.now()}
        endDate={Date.now()}
        trailing={
          <div className="flex flex-col md:flex-row gap-2 w-full h-full">
            <div className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg w-full h-full">
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
