import classes from "./Hotelperform.module.css";

function Hotelperform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="hotelBed">Hotel Bed Type</label>
              </div>{" "}
              <div>
              <select id="hotelBed">
                  <option> KING </option>
                  <option> QUEEN </option>
                  <option> TWIN </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="hotelstar">Hotel Star</label>
              </div>{" "}
              <div>
              <select id="hotelstar">
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                </select>
                
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="hotelrating">Hotel Rating </label>
              </div>{" "}
              <div>
              <select id="hotelstar">
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
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

export default Hotelperform;
