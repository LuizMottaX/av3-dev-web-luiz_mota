import { useEffect, useState } from "react";

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Data e Hora Atuais
      </h2>
      <p className="text-blue-900 text-lg">
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default DateTimeDisplay;
