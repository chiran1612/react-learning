import { useState } from 'react'

// LEARNING: This is a functional component.
// 'useState' is a React Hook — it lets this component have its own state.
export default function Home() {
  // count is the state value, setCount is how we update it.
  // The initial value of count is 0.
  const [count, setCount] = useState(0)

  // LEARNING: When setCount is called, React re-renders this component
  // and the UI updates automatically. You never mutate the DOM yourself.
  return (
    <section>
      <h2>🏠 Home — Counter Example</h2>
      <p>
        Clicking the button calls <code>setCount</code>, which updates state and
        re-renders the component.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </section>
  )
}
