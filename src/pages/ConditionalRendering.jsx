import { useState } from 'react'

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <section>
      <h2>🔀 Conditional Rendering</h2>
      <p>
        Use a condition in JSX to decide which elements React should display.
      </p>

      <div>
        <button onClick={() => setIsLoggedIn((loggedIn) => !loggedIn)}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>

      {/* LEARNING: The ternary operator chooses one of two pieces of JSX. */}
      <p>{isLoggedIn ? 'Welcome back!' : 'You are logged out.'}</p>

      {/* LEARNING: && renders the profile only when isLoggedIn is true. */}
      {isLoggedIn && (
        <p>
          Your profile is ready. <code>isLoggedIn</code> is true.
        </p>
      )}
    </section>
  )
}
