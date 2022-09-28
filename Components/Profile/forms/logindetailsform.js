import classes from "./logindetailsform.module.css"

function Logindetailsform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Edit Login Details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="mobileno">Mobile number</label>
              </div>{" "}
              <div>
                <input type="text" id="mobileno" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="email">Middle Name</label>
              </div>{" "}
              <div>
                <input type="text" id="email" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="password">Last Name</label>
              </div>{" "}
              <div>
                <input type="text" id="password" required />
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

export default Logindetailsform;
