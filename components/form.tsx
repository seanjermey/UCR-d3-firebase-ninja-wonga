import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: { name: string; cost: number }) => Promise<any>;
}

const Form = ({ onSubmit }: FormProps) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  return (
    <form
      className={`card z-depth-0`}
      onSubmit={(e) => {
        e.preventDefault();

        if (!name) {
          return setError("Item name is required");
        }

        if (!cost) {
          return setError("Item cost is required");
        }

        onSubmit({ name, cost: parseInt(cost) }).then((res) => {
          setName("");
          setCost("");
          setError("");
        });
      }}
    >
      <div className="card-content">
        <span className={`card-title indigo-text`}>{`Add Item:`}</span>
        <div className="input-field">
          <input
            type={`text`}
            id={`name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">{`Item name`}</label>
        </div>
        <div className="input-field">
          <input
            type={`number`}
            id={`cost`}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <label htmlFor="cost">{`Item Cost (£)`}</label>
        </div>
        <div className="input-field center">
          <button className={`btn-large pink white-text`}>{`Add Item`}</button>
        </div>
        <div className="input-field center">
          <p className={`red-text`} style={{ margin: "10px 0" }} id={`error`}>
            {error}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
