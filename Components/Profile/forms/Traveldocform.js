import classes from "./Traveldocform.module.css";

function Traveldocform() {
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
             <div className={classes.control}>
              <div>
                <label htmlFor="document-type">Document type</label>
                
              </div>
              <div>
              <select id="hotelBed">
                  <option>AADHAR_CARD</option>
                  <option>DRIVING_LICENSE</option>
                  <option>PASSPORT</option>
                </select>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="adhar">Enter Adhar</label>
              </div>
              <div>
                <input type="text" id="adhar" required />
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

export default Traveldocform;
