import React from "react";
import { useState } from "react";
import Input from "../input";
import PrimaryButton from "../primary_button";
import { useNavigate } from "react-router-dom";

function SearchTicketInput() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  return (
    <div className="flex flex-col w-full px-12 gap-5">
      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="flex-1">
          <Input
            label={"از"}
            placeholder={"تهران"}
            value={from}
            setValue={setFrom}
            type={"text"}
            required={true}
          />
        </div>
        <div className="flex-1">
          <Input
            label={"به"}
            placeholder={"حبیب"}
            value={to}
            setValue={setTo}
            type={"text"}
            required={true}
          />
        </div>
        <div className="flex-1">
          <Input
            label={"تاریخ"}
            value={selectedDayRange}
            setValue={setSelectedDayRange}
            type={"date"}
          />
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton
          title={"جستجو"}
          onClick={() => {
            console.log(selectedDayRange);
            navigate(
              "tickets/" +
                new Date(
                  selectedDayRange.from.year,
                  selectedDayRange.from.month,
                  selectedDayRange.from.day
                ).getTime() +
                "/" +
                new Date(
                  selectedDayRange.to.year,
                  selectedDayRange.to.month,
                  selectedDayRange.to.day
                ).getTime() +
                "/" +
                from +
                "/" +
                to
            );
          }}
        />
      </div>
    </div>
  );
}

export default SearchTicketInput;
