import { useState } from "react";

// const initialForm = {
//   name: '',
//   email: '',
//   experience: '',
//   wantsTips: false,
// }
export default function Form_my() {
  const [name, setName] = useState('Rahul');
return <input value={name} onChange={(r)=> setName(r.target.value)} />;
}

