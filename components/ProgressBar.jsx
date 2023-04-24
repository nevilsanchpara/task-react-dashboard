import React, {useState, useEffect} from "react";

export default function ProgressBar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  return (
    <div className='mt-2'>
      <div className='progressbar'>
        <div
          style={{
            height: "100%",
            width: `80%`,
            backgroundColor: "#8127DE",
            transition: "width 0.5s",
          }}></div>
      </div>
    </div>
  );
}
