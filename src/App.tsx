import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">마법 지팡이</h1>
        <div className="mt-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            클릭 횟수: {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
