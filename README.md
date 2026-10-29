# React Learning App

A beginner-friendly React project (plain JavaScript, no TypeScript) for hands-on learning.

## How to run

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server → open http://localhost:5173
npm run build    # production build into dist/
```

## Project structure

```
src/
  main.jsx        # Entry point — renders <App /> and wraps it in BrowserRouter
  App.jsx         # Root component — navigation + routes
  App.css         # Styles for the app shell
  pages/
    Home.jsx      # useState example (counter)
    About.jsx     # props example
    ConditionalRendering.jsx # Conditional rendering with a login toggle
    Forms.jsx     # Controlled inputs, validation, and form submission
```

## What to learn from this project

1. **Components** — each file in `src/pages/` is a functional component.
2. **JSX** — HTML-like syntax inside JavaScript files.
3. **State (`useState`)** — see `Home.jsx`; clicking the button updates state and React re-renders.
4. **Props** — see `About.jsx`; data passed from parent (`App.jsx`) to child.
5. **Conditional rendering** — see `ConditionalRendering.jsx`; use a ternary and `&&` to show different content based on state.
6. **Forms** — see `Forms.jsx`; control text inputs and selects with `value`, checkboxes with `checked`, handle changes, validate, submit without reloading, and reset state. The page also includes commented-out failure examples.
7. **Routing (`react-router-dom`)** — `BrowserRouter` in `main.jsx`, `Routes`/`Route`/`NavLink` in `App.jsx`.
8. **HMR** — edit any file while `npm run dev` is running and see changes instantly.

Search the code for `// LEARNING:` comments — each one explains a concept in place.

## Suggested next steps

- Add a third page (e.g., `Contact.jsx`) and a `NavLink` for it
- Map over an array to render a list (remember the `key` prop)
- Fetch data from an API with `useEffect` + `fetch`
