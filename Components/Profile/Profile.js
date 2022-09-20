
export function Profile(){


    return<>
    <div className="container">
        <div className="container1">
            <div className="container1-1">
        <div className="container1-1-1">
            SB
        </div>
        <div className="container1-1-2">
            <div><label>Name</label>
            <input></input></div>
            <div><label>Name</label>
            <input></input></div>
            <div><label>Name</label>
            <input></input></div>
            <div><label>Name</label>
            <input></input></div>
            <div><label>Name</label>
            <input></input></div>
            
        </div>

            </div>
        </div>
        <div className="container2">
        <div className="container2-1">
                <div className="contianer-box">
                <div className="heading-section">
                <h1>Profile</h1>
                <h3>Basic info, for a faster booking experience</h3>
                </div>
                <div className="info-section"><label>Name</label>
                    <span>Sahil</span></div>
                <div className="info-section"><label>Birthday</label>
                <span>Sahil</span></div>    
                <div className="info-section"><label>Gender</label>
                <span>Sahil</span></div>  
                <div className="info-section"><label>Martial Status</label>
                <span>Sahil</span></div>  
                </div>
                {/* // */}
                <div className="contianer-box">
                <div className="heading-section">
                <h1>Login Details</h1>
                <h3>Manage your email address, password and mobile number</h3>
                </div>
                <div className="info-section"><label>Mobile No.</label>
                    <span>Sahil</span></div>
                <div className="info-section"><label>Email-id</label>
                <span>Sahil</span></div>    
                <div className="info-section"><label>Password</label>
                <span>Sahil</span></div>  
              
                </div>
                {/* // */}
                <div className="contianer-box">
                <div className="heading-section">
                <h1>Save Traveller</h1>
                <h3>Basic info, for a faster booking experience</h3>
                </div>
                <div>
                    <ul className="travel-item">
                        <li className="travel-items">
                        <div className="pax-icon">icon</div>
                        <div >
                            <p className="pax-data">
                            <span className="pax-data-item">NAme(Dfsdf)</span>
                            <span className="pax-data-item">908765432</span>
                            <span className="pax-data-item">dsbfb@gmils.com</span>
                            </p></div>
                        </li>

                        <li className="travel-items">
                        <div className="pax-icon">icon</div>
                        <div >
                            <p className="pax-data">
                            <span className="pax-data-item">NAme(Dfsdf)</span>
                            <span className="pax-data-item">908765432</span>
                            <span className="pax-data-item">dsbfb@gmils.com</span>
                            </p>
                            </div>
                        </li>
                    </ul>
                </div>
                   
                
                  
                </div>
                </div>
        </div>
    </div>
    <style jsx>{`
        .container{
            margin-top:12px;
            padding-top:6rem;
            display:flex;
            background:#f6f6f6;
            height:100%;
            width:100%;
            justify-content:space-between;
            // box-sizing:border-box;

        }
        .container1{
            width:21%;
            display:flex;
            // border:3px solid red;
            justify-content:right;
            // align-items:right;
            // padding-top:8rem;
        }
        .container1-1{
            display:flex;
            flex-direction:column;
            align-items:center;
            height:40%;
            // position:sticky;
            
            border:1px solid black;
            border-radius:17px;
            // padding-top:20px; 
            // paddiing-bottom:20px; 

        }
       
         .container1-1-1{
            // border:3px solid blue;
           
            // width:86%;
            display:flex;
            border-radius: 50%;
            height:150px;
            width:150px;
            margin-top:20px; 
            // margin-right:50px; 
            // margin-left:50px; 
            margin-bottom:20px;
            background-image: linear-gradient(red, yellow); 
            justify-content:center;
            align-items:center;    
        }
        
        .container1-1-2{
            display:flex;
            flex-direction:column;
        }
        .container1-1-2 div{
            // border:3px solid blue;
        }
// Container 2
        .container2{
            width:75%;
            // border:3px solid red;
        }

        
        .container2-1{

            display:flex;
            // border:6px solid blue;
            flex-direction:column;
            padding-left:1rem;
            align-items:left;
            background:#f6f6f6;
        }
        .contianer-box {
            display:flex;
            flex-direction:column;
            background:white;
            border:1px solid black; 
            margin-bottom:1.5rem;
            border-radius:20px;
            width:80%;
        }

        .heading-section {
            // border:2px solid orange;
            padding-left:10px;
            padding-top:0px;
        }
        .heading-section h1 {
            font-size:28px;
            
        }
        .heading-section h3 {
            // font-size:px;
        }
    .info-section {
        margin-top:20px;
        margin-left:5px;
        margin-bottom:20px;
        padding:0.2rem;
        border-bottom:1px solid;
    }
    .info-section label{
        padding:5px;
        margin:3px;
    }
    .info-section span{
        padding:2px;
        margin:3px;
        // border-radius:4px;
    }
    .travel-item{
        list-style:none;
        display:flex;
        padding-inline-start:0px;
        margin:0px;
        padding-right:10px;
        padding-left:10px;
        flex-direction:column;
        border:2px solid green;
        width:100%;

    }
    .travel-items{
        display:flex;
        justify-content:space-between;
        align-items:center;  
    }
    .pax-data{
        display:flex;
        justify-content:space-between;  
        
    
    }
    .pax-data span{
        // border:2px solid red;
        // margin:2px;
    }
    .pax-data-item{
        width:200px;
    }
    .pax-icon{
        // border:2px solid blue;
    }

            `}
    </style>
    </>
}