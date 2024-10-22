import axios from "axios";
import { FormEvent, useState } from "react";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios.post("", { name: name, email: email }).then((res) => {});
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-40 bg-white rounded p-4">
          <h2>Add Student</h2>
          <p>{name}</p>
          <p>{email}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateStudent;
