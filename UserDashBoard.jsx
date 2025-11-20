
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const CrudOperations = () => {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");

  // Edit states
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [gender, setGender] = useState("");
  let [editId, setEditId] = useState(null);

  // GET API
  useEffect(() => {
    async function userApi() {
      let { data } = await axios.get("https://dummyjson.com/users");
      setUsers(data.users);
    }
    userApi();
  }, []);

  // Search filter
  let filterData = useMemo(() => {
    return users.filter((person) =>
      person.firstName.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  let handleData = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // Sorting
  let sortUserData = useMemo(() => {
    return [...filterData].sort((a, b) =>
      a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
    );
  }, [filterData]);

  // EDIT handler
  let editData = useCallback((person) => {
    setEditId(person.id);
    setName(person.firstName);
    setLastName(person.lastName);
    setGender(person.gender);
  }, []);

  // UPDATE handler
  let updateUser = () => {
    let updatedList = users.map((u) =>
      u.id === editId
        ? { ...u, firstName: name, lastName: lastName, gender: gender }
        : u
    );

    setUsers(updatedList);

    // Reset state after update
    setEditId(null);
    setName("");
    setLastName("");
    setGender("");
  };

  // DELETE handler
  let deleteUser = (id) => {
    let remaining = users.filter((u) => u.id !== id);
    setUsers(remaining);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8 mx-auto">
          <input
            type="text"
            className="my-3 form-control text-center"
            placeholder="Search by first name..."
            value={search}
            onChange={handleData}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3 mx-auto">
          <table
            key={users.length}
            className="table table-light hover table-striped"
          >
            <thead>
              <tr>
                <th>S.no</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {sortUserData.map((person, index) => (
                <tr key={person.id}>
                  <td>{index + 1}</td>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.gender}</td>

                  <td>
                    <button
                      className="btn btn-warning"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasEdit"
                      onClick={() => editData(person)}
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(person.id)}
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

      {/* OFFCANVAS FOR EDIT */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasEdit"
        aria-labelledby="offcanvasEditLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasEditLabel">
            Update User Data
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <div className="row justify-content-center">
            <div className="col-7 m-2">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-7 m-2">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-7 m-2">
              <input
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-7 m-2">
              <button
                className="btn btn-success"
                onClick={updateUser}
                data-bs-dismiss="offcanvas"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
