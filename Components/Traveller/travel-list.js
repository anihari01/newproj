export function TravelList(props){

    console.log(props.data.travel);
    const travels=props.data.travellers.map((traveler)=>{
    
    
    return<>
   
    <div>
    <ul className="travel-item">
        <li className="travel-items">
        <div className="pax-icon">{traveler.icon}</div>
          <div>
            <p className="pax-data">
              <span className="pax-data-item">{traveler.name}</span>
              <span className="pax-data-item">{traveler.mobile}</span>
              <span className="pax-data-item">{traveler.email}</span>
            </p>
          </div> 
          </li>
          </ul>
          </div>
  {/* </div> */}
  <style jsx>{`
  .travel-item {
    list-style: none;
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
    padding-right: 10px;
    padding-left: 10px;
    flex-direction: column;
    // border: 2px solid green;
    width: 100%;
  }
  .travel-items {
    display: flex;
    // justify-content: space-between;
    
    align-items: center;
  }
  .pax-data {
    display: flex;
    justify-content: space-between;
  }
  .pax-data span {
    // border:2px solid red;
    // margin:2px;
  }
  .pax-data-item {
    width: 200px;
  }
  .pax-icon {
    margin-right:20px;
    // border:2px solid blue;
  }
  `}</style>
     </>
});

return<>{travels}</>
}