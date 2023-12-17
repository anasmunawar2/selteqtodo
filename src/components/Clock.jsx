import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      const randomBackgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      const randomTextColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;

      setBackgroundColor(randomBackgroundColor);
      setTextColor(randomTextColor);
    }, 10000);

    return () => clearInterval(colorChangeInterval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "2em",
        transition: "background-color 0.5s, color 0.5s",
        marginTop: "20px",
      }}
    >
      <div>{formattedTime}</div>
    </div>
  );
};

export default DigitalClock;
