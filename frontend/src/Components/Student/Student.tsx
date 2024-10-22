import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-75 bg-white rounded p-4">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
          <table className="table">
            <thead>
              <th>Name</th>
              <th>E-mail</th>
              <th>Action</th>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Student;
