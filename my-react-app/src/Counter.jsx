import React , {useState} from 'react'

function Counter() {

   const [count, SetCount] = useState(0)

    const increment = () =>SetCount(c => c + 2)

    const decrement = () =>SetCount(c => c - 5)

    const reset = () =>SetCount(0)

    
  return (
    <div>

        <p>COUNTER: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

      
    </div>
  )
}

export default Counter
