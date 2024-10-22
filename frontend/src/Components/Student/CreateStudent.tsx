import axios, { AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (id) update();
    else create();
  };

  const create = () => {
    axios
      .post("http://localhost:8081/student", { ...formData })
      .then(handleResponse);
  };

  const update = () => {
    axios
      .put("http://localhost:8081/student/" + id, { ...formData })
      .then(handleResponse);
  };

  const fecthStudent = () => {
    useEffect(() => {
      axios.get("http://localhost:8081/student/" + id).then((res) => {
        setFormData({
          name: res.data[0].name,
          email: res.data[0].email,
        });
      });
    }, []);
  };

  const handleResponse = (res: AxiosResponse) => {
    console.log(res);
    navigate("/");
  };

  const handleChange = (event: ChangeEvent) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (id) fecthStudent();

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
                onChange={handleChange}
                placeholder="Fullname..."
                value={formData.name}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={handleChange}
                placeholder="email@domain.com"
                value={formData.email}
                name="email"
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
