import { useState } from "react";

const initialForm = {
  name: 'rahul',
  email: '',
  experience: '',
  wantsTips: false,
}
export default function Form_my() {
  const [form, setForm] = useState(initialForm);
return <   input value={form.name} onChange={(r)=> setForm(r.target.value)} 
/>
;
}

