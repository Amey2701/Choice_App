import { useState, useRef } from "react";
import axios from "axios";

function WhatNext() {
  const rName = useRef();

  const [name, setName] = useState("");
  const [choice, setChoice] = useState("job");
  const [msg, setMsg] = useState("");

  const hName = (event) => {
    setName(event.target.value);
  };
  const hChoice = (event) => {
    setChoice(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    let data = { name, choice };
    let url = "https://jj-ifvb.onrender.com/save";
    axios
      .post(url, data)
      .then((res) => {
        setMsg("Thank You!!!!");
        setName("");
        setChoice("job");
        rName.current.focus();
      })
      .catch((err) => setMsg("Issue" + err));
  };

  return (
    <div className="container">
      <h1>What Next???</h1>
      <form onSubmit={save}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={hName}
          ref={rName}
          value={name}
        />
        <br />
        <div className="radio-group">
          <input
            type="radio"
            name="c"
            value="job"
            defaultChecked={true}
            onChange={hChoice}
            checked={choice === "job"}
          />
          job
          <input type="radio" name="c" value="ms" onChange={hChoice} />
          MS
          <input type="radio" name="c" value="mba" onChange={hChoice} />
          MBA
        </div>
        <input type="submit" />
      </form>
      <h2>{msg}</h2>
    </div>
  );
}

export default WhatNext;
