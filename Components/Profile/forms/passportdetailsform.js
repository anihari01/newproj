import classes from "./passportdetailsform.module.css";

function Passportdetailsform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="passportno">Passport NUmber</label>
              </div>{" "}
              <div>
                <input type="text" id="passportno" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="placeofbirth">Place of Birth</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofbirth" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="placeofissue">Place of Issue</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofissue" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="dateofissue">Date of Issue</label>
              </div>{" "}
              <div>
                <input type="date" id="dateofissue" required />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                {" "}
                <label htmlFor="dateofexpiry">Date of Expiry</label>
              </div>
              <div>
                <input type="date" id="dateofexpiry" required />
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

export default Passportdetailsform;
