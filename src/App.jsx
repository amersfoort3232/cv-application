import { useState } from "react";
import "./style.css";

function App() {
  const [educationItems, setEducationItems] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({});
  const [experienceItems, setExperienceItems] = useState([]);

  function handleAddEducation(educationItem) {
    setEducationItems((educationItems) => [...educationItems, educationItem]);
  }

  function handleAddPersonalInfo(personalInfo) {
    setPersonalInfo(personalInfo);
  }
  function handleAddExperience(experienceItem) {
    setExperienceItems((experienceItems) => [
      ...experienceItems,
      experienceItem,
    ]);
  }

  return (
    <main className="mainContainer">
      <div className="inputContainer">
        <div>
          <GeneralInfo
            onAddPersonalInfo={handleAddPersonalInfo}
            className="personalInfoInput"
          />
        </div>
        <div>
          <Education
            onAddEducation={handleAddEducation}
            className="educationInput"
          />
        </div>
        <div>
          <Experience
            onAddExperience={handleAddExperience}
            className="experienceInput"
          />
        </div>
      </div>
      <div className="outputContainer">
        <div className="personalInfo">
          <DisplayName personalInfo={personalInfo} />
        </div>
        <div className="educationList">
          <EducationList educationItems={educationItems} />
        </div>
        <div className="experienceList">
          <ExperienceList experienceItems={experienceItems} />
        </div>
      </div>
    </main>
  );
}

/* function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  console.log("Form submitted");
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
} */

/* Input section for general info */
function GeneralInfo({ onAddPersonalInfo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function handlePersonalInfoSubmit(e) {
    e.preventDefault();
    console.log("Personal Information added");

    const newPersonalInfo = {
      name,
      email,
      tel,
    };

    onAddPersonalInfo(newPersonalInfo);

    setName(name);
    setEmail(email);
    setTel(tel);
  }

  return (
    <>
      <h1>General Info</h1>
      <form method="post" onSubmit={handlePersonalInfoSubmit}>
        <label htmlFor="name">
          First name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="tel">
          Phone number:
          <input
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            required
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

/* Output section of Personal Information */
function DisplayName({ personalInfo }) {
  return (
    <>
      <h1>Personal Infomation</h1>
      <h2>{personalInfo.name}</h2>
      <h4>{personalInfo.email}</h4> <h4>{personalInfo.tel}</h4>
    </>
  );
}

/* Input section for education Information */
function Education({ onAddEducation }) {
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

    onAddEducation(newEducationInfo);

    setSchool("");
    setTitle("");
    setStartDate("");
    setEndDate("");
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
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

/* function that render the list of education */
function EducationList({ educationItems }) {
  return (
    <div className="education">
      <h1>Education</h1>
      <ul>
        {educationItems.map((education) => (
          <EducationItem educationItem={education} key={education.startDate} />
        ))}
      </ul>
    </div>
  );
}

/* Each education item that will be listed by EducationList function */
function EducationItem({ educationItem }) {
  return (
    <li>
      <h3>{educationItem.title}</h3>
      <h4>{educationItem.school}</h4>
      <p>
        {educationItem.startDate} - {educationItem.endDate}
      </p>
    </li>
  );
}
/* 
function that list all working experience */
function ExperienceList({ experienceItems }) {
  return (
    <div className="education">
      <h1>Experience</h1>
      <ul>
        {experienceItems.map((experience) => (
          <ExperienceItem
            experienceItem={experience}
            key={experience.startDate}
          />
        ))}
      </ul>
    </div>
  );
}

/* Each experience item that will be listed by ExperienceList function */
function ExperienceItem({ experienceItem }) {
  return (
    <li>
      <h3>{experienceItem.position}</h3>
      <h4>{experienceItem.company}</h4>
      <p>
        {experienceItem.startDate} - {experienceItem.endDate}
      </p>
      <p>{experienceItem.description}</p>
    </li>
  );
}
function Experience({ onAddExperience }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function handleExperienceSubmit(e) {
    e.preventDefault();
    console.log("Experience Information added");

    const newExperienceInfo = {
      company,
      position,
      startDate,
      endDate,
      description,
    };

    onAddExperience(newExperienceInfo);

    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  }

  return (
    <>
      <h1>Experience</h1>
      <form onSubmit={handleExperienceSubmit}>
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          id="company"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <br />
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <label htmlFor="endDate">End Date: </label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
