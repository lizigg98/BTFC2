import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Set lại giá trị thời gian sau 5s
    const timerId = setTimeout(() => {
      setTime(time + 5);
    }, 5000);

    return () => {
      clearTimeout(timerId); // Xóa timeout nếu component unmount
    };
  }, [time]); // Chỉ chạy một lần khi component mount

  return <div>{time}</div>;
}

export default App;