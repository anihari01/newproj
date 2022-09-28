import classes from "./Profileform.module.css";

function Profileform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Edit Profile</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="name">Name</label>
              </div>{" "}
              <div>
                <input type="text" id="name" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="email">Email</label>
              </div>{" "}
              <div>
                <input type="text" id="email" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="mobileno">Mobile no</label>
              </div>{" "}
              <div>
                {" "}
                <input type="text" id="mobileno" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="gender">Gender</label>
              </div>{" "}
              <div>
              <select id = "gender" >  
                <option> MALE </option>  
                <option> FEMALE </option>  
                <option> OTHER </option>  
              </select>  
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="dob">Date of Birth</label>
              </div>{" "}
              <div>
                <input type="date" id="dob" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                {" "}
                <label htmlFor="nationality">Nationality</label>
              </div>
              <div>
                <input type="text" id="nationality" required />
              </div>{" "}
            </div>
            
            
            <div className={classes.button1}>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>{" "}
    </div>
  );
}

export default Profileform;
