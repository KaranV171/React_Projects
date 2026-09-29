import React,{useState} from 'react'

const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [submittedName,setSubmittedName] = useState("");
  const [submittedEmail,setSubmittedEmail] = useState("");
  const [submittedAge,setSubmittedAge] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedAge(age);
  }

  return (
    <div className="container">
      <h1>Student Registration</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />

        <br></br>

        <label>Email:</label>
        <input 
          type="text"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />

        <br></br>

        <label>Age:</label>
        <input 
          type="number"
          value={age}
          onChange={(e)=>{
            setAge(e.target.value)
          }}
        />

        <br></br>

        <button type="submit">Submit</button>
      </form>

      <h2>Student Details</h2>
      <p>Name: {submittedName}</p>
      <p>Email: {submittedEmail}</p>
      <p>Age: {submittedAge}</p>
    </div>
  )
}

export default App