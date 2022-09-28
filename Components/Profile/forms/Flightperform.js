import classes from "./Flightperform.module.css";

function Flightperform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Flight preference details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="seatsecpos">Seat Section Position</label>
              </div>{" "}
              <div>
                <select id="seatsecpos">
                  <option> FORWARD </option>
                  <option> MIDDLE </option>
                  <option> BACK </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="seatrowpos">Seat Row Position</label>
              </div>{" "}
              <div>
                <select id="seatrowpos">
                  <option> WINDOW </option>
                  <option> MIDDLE </option>
                  <option> AISLE </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="seattype">Seat Type</label>
              </div>{" "}
              <div>
                <select id="seattype">
                  <option> Business </option>
                  <option> Economy </option>
                  <option> Student </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="mealtype">Meal Choice</label>
              </div>{" "}
              <div>
                <select id="mealtype">
                  <option> VEG </option>
                  <option> NON-VEG </option>
                  <option> MIX </option>
                </select>
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

export default Flightperform;
