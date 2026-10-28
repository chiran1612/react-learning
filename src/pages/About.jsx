// LEARNING: A component can receive data from its parent via "props".
// Here the prop is optional and has a default value.
export default function About({ author = 'You' }) {
  return (
    <section>
      <h2>📖 About</h2>
      <p>
        This project was created for learning React with Vite + JavaScript.
      </p>
      <p>
        Maintainer: <strong>{author}</strong>
      </p>
    </section>
  )
}
