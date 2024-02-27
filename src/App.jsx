import { useState } from "react";

const educationInfo = [];

function App() {
  return (
    <div className="inputContainer">
      <div className="generalInfo">
        <h1>CV Application</h1>
      </div>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  console.log("Form submitted");
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

function GeneralInfo() {
  return (
    <>
      <h1>General Info</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">
          First name:
          <input type="text" id="name" name="name" />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <br />
        <label htmlFor="tel">
          Phone number:
          <input type="tel" id="tel" name="tel" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function Education() {
  const [educations, setEducation] = useState(educationInfo);
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleEducationSubmit(e) {
    e.preventDefault();
    console.log("Education Information added");

    const newEducationInfo = {
      school,
      title,
      startDate,
      endDate,
    };

    console.log(newEducationInfo);

    setEducation([...educations, newEducationInfo]);

    setSchool("");
    setTitle("");
    setStartDate("");
    setEndDate("");
    console.log(educations);
  }

  /*  const addEducation = ({ school, title, startDate, endDate }) => {
    setEducation([
      ...educations,
      {
        school: school,
        title: title,
        startDate: startDate,
        endDate: endDate,
      },
    ]);
  }; */

  return (
    <>
      <h1>Education</h1>
      <form onSubmit={handleEducationSubmit}>
        <label htmlFor="school">School: </label>
        <input
          type="text"
          id="school"
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="startDate">Start date: </label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <label htmlFor="endDate">End date: </label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <form>
        <label htmlFor="company">Company: </label>
        <input type="text" id="company" name="company" />
        <br />
        <label htmlFor="position">Position: </label>
        <input type="text" id="company" name="position" />
        <br />
        <label htmlFor="startDate">Start Date: </label>
        <input type="month" id="startDate" name="startDate" />
        <br />
        <label htmlFor="endDate">End Date: </label>
        <input type="month" id="endDate" name="endDate" />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea id="description" name="description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
