import 'register.css';
function StudentRegister() {
    return (
      <>
            <form className="login" action="/StudentRegistered" method="POST">
                <div className="head">JeeCode</div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" id="fullname" name="fullname" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="email" />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" name="username"/>
                </div>
                <div className="mb-3">
                        <label for="role" className="form-label">Who are you?</label>
                        <select className="form-select" aria-label="Default select example" id="role">
                            <option selected>Select role</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="exampleInputPassword" name="password" />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
            </form>
      </>
    );
  }
  
  export default StudentRegister;