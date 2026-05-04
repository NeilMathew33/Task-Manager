import React, { useState } from 'react'

const SignUp = () => {

const [input, setInput] = useState(
    {
      firstname: "",
      middlename: "",
      lastname: "",
      address: "",
      username: "",
      role: "",
      emailid: "",
      timezone: "",
      password: "",
      confirmpassword: "",
    }
  )
  
  const handleInput = (event) => {
    setInput(
      {... input,[event.target.name]:event.target.value}
    )
  }

  const readValues = () => {
    console.log(input)
  }

  return (
    <div>

<div className="container">
  <div className="row justify-content-center vh-100 align-items-center">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
      <div class="card shadow">
 
  <div class="card-body ">
    
<div className="row g-3">
<h4 className='text-center'>User Sign Up</h4>


        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstname" value={input.firstname} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">Middle Name</label>
          <input type="text" className="form-control" name="middlename" value={input.middlename} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lastname" value={input.lastname} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Address</label>
         <textarea name="address" id="" className="form-control" value={input.address} onChange={handleInput}></textarea>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={input.username} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Role</label>
          <input type="text" className="form-control" name="role" value={input.role} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Email ID</label>
          <input type="text" className="form-control" name="emailid" value={input.emailid} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Time Zone</label>
          <input type="text" className="form-control" name="timezone" value={input.timezone} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="password" id="" className="form-control" value={input.password} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Confirm Password</label>
          <input type="password" name="confirmpassword" id="" className="form-control" value={input.confirmpassword} onChange={handleInput} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <button onClick={readValues} className="btn btn-success">Sign Up</button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <a href="/"> I already have an account</a>
        </div>
      </div>

  </div>
</div>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default SignUp