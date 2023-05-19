import { useState, useEffect, useRef, useCallback } from 'react';

// export default function App() {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде null на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   // console.log(btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     // if (value === 0) return;
//     console.log(btnRef);
//     console.log(value);
//   }, [value]);

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//     // console.log(value);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// }

import React from 'react';

const App = () => {
  const [counter, setCounter] = useState(() => 0);

  useEffect(() => {
    console.log('One');
    // if (counter > 2) {
    //   console.log('first');
    // }
    // return () => {
    //   console.log('second');
    // };
  }, []);

  const handleClick = () => {
    setCounter(prevC => prevC + 1);
  };

  // console.log('Render');

  return (
    <>
      <div>
        {counter}
        <button type="button" onClick={handleClick}>
          Increase
        </button>
      </div>
    </>
  );
};

export default App;
