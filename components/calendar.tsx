import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function CalendarComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        className="text-white"
        styles={{
          months: { justifyContent: "center" },
          caption: { color: "white", fontWeight: "bold" },
          nav_button: {
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "8px",
          },
          day_selected: { backgroundColor: "#06b6d4", color: "white" },
          day_today: { color: "#facc15", fontWeight: "semi-bold" },
        }}
      />
    </div>
  );
}
