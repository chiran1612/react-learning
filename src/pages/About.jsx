// LEARNING: A component can receive data from its parent via "props".
// Here the prop is optional and has a default value.
// function LearnerCard({ name, role }) {
//   return (
//     <p>
//       {name} is learning React as a {role}.
//     </p>
//   )
// }
function LearnerCard(props) {
  return (
    <p>
      {props.name} is learning React as a {props.role}.
    </p>
  )
}


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
      {/* LEARNING: Pass props in JSX; the child receives them as function arguments. */}
      <LearnerCard name="Alex" role="beginner" />
    </section>
  )
}
