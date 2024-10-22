import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);

  const fecthStudents = () => {
    axios
      .get("http://localhost:8081/student")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fecthStudents();
  }, []);

  const handleDelete = (id: Number) => {
    axios.delete("http://localhost:8081/student/" + id).then((res) => {
      alert("Deleting student " + id);
      fecthStudents();
    });
  };

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
                    <Link
                      to={`/create/${student.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => {
                        handleDelete(student.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
