import { useState } from "react";

const initialForm = {
  name: "rahul",
  email: "",
  experience: "",
  wantsTips: false,
};
export default function Form_my() {
  const [form, setForm] = useState(initialForm);
  return (
<main>
    <img src="/images/chef-1.jpg" alt="Chef cooking" />
    <input value={form.name} />
  </main> 
  )
  
}
