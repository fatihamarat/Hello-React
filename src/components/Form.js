import React, {useState} from 'react';

function Form() {
    const [name, setName]=useState("");
    const [surname, setSurname]=useState("");
  return (
<div>
    <div>
        <div>İsim</div>
        <input placeholder='isim' onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder='soyisim' onChange={(e)=>setSurname(e.target.value)}></input>
    </div>
    <strong>
        {name} {surname}
    </strong>
</div>
  )
}

export default Form;