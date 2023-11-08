import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StudentForm from "../components/studentForm";
import StudentList from "../components/studentList";
import { Link } from "react-router-dom";

import "./Root.less";

export default function Root() {
  return (
    <>
      <Navbar />
      <nav>
        <Link to="/students">All Students</Link>
        <br />
        <Link to="/new">Add Student</Link>
      </nav>
      <main>
        <Outlet />
        <Routes>
          <Route path="/students" element={<StudentList />} />
          <Route path="/new" element={<StudentForm />} />
        </Routes>
      </main>
    </>
  );
}
