import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (id) update();
    else create();
  };

  const create = () => {
    axios
      .post("http://localhost:8081/student", { name: name, email: email })
      .then(handleResponse);
  };

  const update = () => {
    axios
      .put("http://localhost:8081/student/" + id, { name: name, email: email })
      .then(handleResponse);
  };

  const handleResponse = (res: AxiosResponse) => {
    console.log(res);
    navigate("/");
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-40 bg-white rounded p-4">
          <h2>{id ? "Edit Student" : "Add Student"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Fullname..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateStudent;
