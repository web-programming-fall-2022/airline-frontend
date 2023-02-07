import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import React from "react";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

function DateInput({ selectedDayRange, setSelectedDayRange, inputClassName }) {
  return (
    <DatePicker
      inputClassName={inputClassName}
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      inputPlaceholder="انتخاب تاریخ"
      shouldHighlightWeekends={true}
      locale="fa"
    />
  );
}

export default DateInput;
