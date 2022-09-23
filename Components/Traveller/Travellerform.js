import classes from "./Travellerform.module.css";

function Travellerform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="FirstName">First Name</label>
              </div>{" "}
              <div>
                <input type="text" id="firstname" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="MiddleName">Middle Name</label>
              </div>{" "}
              <div>
                <input type="text" id="middlename" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="LastName">Last Name</label>
              </div>{" "}
              <div>
                <input type="text" id="lastname" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="Gender">Gender</label>
              </div>{" "}
              <div>
                <input type="text" id="gender" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                {" "}
                <label htmlFor="CountryCode">Country Code</label>
              </div>
              <div>
                <input type="text" id="countrycode" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="Mobileno">Mobile no</label>
              </div>{" "}
              <div>
                {" "}
                <input type="text" id="mobileno" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="EmailID">Email ID</label>
              </div>{" "}
              <div>
                <input type="email" id="emailid" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="DocumentNumber">Document Number</label>
              </div>
              <div>
                {" "}
                <input type="number" id="documentnumber" required />
              </div>
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

export default Travellerform;
