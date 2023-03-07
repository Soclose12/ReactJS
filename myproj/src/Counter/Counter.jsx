import { useEffect, useState } from "react";
import "./Counter.scss"
const Counter = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      const inter = setInterval(() => {
         setCount(count => count + 1);
      }, 1000);
      return () => clearInterval(inter);
   }, []);

   return (
      <div>
         {count}

      </div>
   )
}
export default Counter;