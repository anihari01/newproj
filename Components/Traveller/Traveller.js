import { TravelList } from "./travel-list";
import Link from 'next/link'
export function Traveller() {

  return (
    <>
      <div className="contianer-box">
        <div className="heading-section">
          <h1>Save Traveller</h1>
          <h3>Basic info, for a faster booking experience</h3>
          <Link href='./Travellerform'>Add Traveller Details</Link>
        </div>
        <div><TravelList />
     
        </div>
      </div>



      <style jsx>{`
      .contianer-box {
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid black;
        margin-bottom: 1.5rem;
        border-radius: 20px;
        width: 80%;
      }
      .heading-section {
        // border:2px solid orange;
        padding-left: 10px;
        padding-top: 0px;
      }
      .heading-section h1 {
        font-size: 28px;
      }
    //   
      `}</style>
    </>
  );
}
