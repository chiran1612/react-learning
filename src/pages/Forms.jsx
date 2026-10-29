import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  experience: '',
  wantsTips: false,
}

export default function Forms() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submittedName, setSubmittedName] = useState('')

  // One handler works for text inputs, selects, and checkboxes.
  function handleChange(event) {
    const { name, value, checked, type } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setSubmittedName('')
  }

  function handleSubmit(event) {
    // Forms submit to a URL by default; prevent navigation for this local demo.
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) {
      nextErrors.name = 'Enter your name.'
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter an email address in a valid format.'
    }
    if (!form.experience) {
      nextErrors.experience = 'Choose your current experience level.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      // This demo has no backend; submission only displays a local confirmation.
      setSubmittedName(form.name.trim())
    }
  }

  function handleReset() {
    setForm(initialForm)
    setErrors({})
    setSubmittedName('')
  }

  return (
    <section className="forms-lesson">
      <h2> Forms in React</h2>
      <p className="forms-intro">
        A controlled form keeps the input values in React state. As you type,
        <code>onChange</code> updates state and React renders the current value.
      </p>

      <form className="learning-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="learner-name">Name</label>
          <input
            id="learner-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p className="form-error" id="name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="learner-email">Email</label>
          <input
            id="learner-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p className="form-error" id="email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="experience">React experience</label>
          <select
            id="experience"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            aria-invalid={Boolean(errors.experience)}
            aria-describedby={
              errors.experience ? 'experience-error' : undefined
            }
          >
            <option value="">Choose one</option>
            <option value="beginner">Just starting</option>
            <option value="some">I know a little</option>
            <option value="confident">Feeling confident</option>
          </select>
          {errors.experience && (
            <p className="form-error" id="experience-error" role="alert">
              {errors.experience}
            </p>
          )}
        </div>

        <label className="checkbox-field" htmlFor="wants-tips">
          <input
            id="wants-tips"
            name="wantsTips"
            type="checkbox"
            checked={form.wantsTips}
            onChange={handleChange}
          />
          Send me learning tips
        </label>

        <div className="form-actions">
          <button type="submit">Submit form</button>
          <button className="secondary-button" type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {submittedName && (
        <p className="form-success" role="status">
          Thanks, {submittedName}! The form is valid. (This demo does not send
          data to a server.)
        </p>
      )}

      <section className="form-concepts" aria-labelledby="form-concepts-title">
        <h3 id="form-concepts-title">Key concepts and common cases</h3>
        <ul>
          <li>
            <strong>Controlled inputs:</strong> text fields and selects use
            <code>value</code>; checkboxes use <code>checked</code>.
          </li>
          <li>
            <strong>Change events:</strong> read the input&apos;s
            <code>name</code> and update that property, using
            <code>checked</code> for checkboxes and <code>value</code> otherwise.
          </li>
          <li>
            <strong>Submit events:</strong> use <code>onSubmit</code> on the form
            so Enter key submission works, then call
            <code>preventDefault()</code> when handling it in the page.
          </li>
          <li>
            <strong>Validation:</strong> show which field needs attention and
            associate the message with its input for assistive technology.
          </li>
          <li>
            <strong>Reset:</strong> reset React state as well as the visible
            success and error messages.
          </li>
        </ul>

        <h3>Failure examples (intentionally commented out)</h3>
        <p>
          These examples are not active. Uncommenting one in the form can
          reproduce the described issue.
        </p>
        <pre className="failure-examples">
          <code>{`// 1. value without onChange makes a controlled input read-only:
// <input value={form.name} />

// 2. Forgetting preventDefault() submits/reloads the page:
// function handleSubmit(event) {
//   // event.preventDefault() is missing
// }

// 3. A checkbox is controlled with checked, not value:
// <input type="checkbox" value={form.wantsTips} />

// 4. Direct mutation does not reliably trigger a React render:
// form.name = event.target.value
// setForm(form)

// 5. Updating a single property without copying loses the other fields:
// setForm({ name: event.target.value })`}</code>
        </pre>
      </section>
    </section>
  )
}
