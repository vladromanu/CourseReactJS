import React, { useState } from "react";
import styles from "./App.css";

const App = () => {
  const [name, setName] = useState([]);
  const [courses, setCourses] = useState([]);

  /**
   * Event Handlers
   */
  // Click on the add course
  const handleAddClick = () => {
    addNameToList(name);
  };

  // Key press - Enter 
  const handleOnKeyPress = (e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
      addNameToList(name);
    }
  };

  const addNameToList = (name) => {
    setCourses([...courses, name]);
    setName('');
  }

  // Reset 
  const handleResetClick = () => {
    setCourses([]);
    setName('');
  };

  // Change on the input field
  const handleOnChange = (event) => {
    setName(event.target.value);
  };


  /**
   * CourseList - Component
   */
  const CourseList = () => {
    return <div className="card">
      {courses && <div class="card-header">
        Courses
      </div>}
      <ul class="list-group list-group-flush">
        {courses.map((item, k) =>
          <li class="list-group-item">{item}</li>
        )}

        {courses.length == 0 && <div class="card-footer alert-warning">
          There are no courses yet added.
      </div>}
      </ul>
    </div >;
  };

  return (
    <div className="container wrapper">
      <div className="row">
        <div className="col-8">
          <div className="input-group mb-3">

            <input type="text" className="form-control" placeholder="Add the course name"
              aria-label="add the course name" aria-describedby="course-name"
              id='courseName' value={name}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
            />

            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-add"
                onClick={handleAddClick}>Add Course</button>
            </div>

            <button className="btn btn-outline-secondary" type="button" id="button-reset"
              onClick={handleResetClick}>Reset</button>

          </div>
        </div>

      </div>

      <CourseList />
    </div>
  )
};

export default App