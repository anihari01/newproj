
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
                <h1>Profile</h1>
                <h3>Basic info, for a faster booking experience</h3>
                <div><label>Name</label>
                    <input></input></div>
                <div><label>Birthday</label>
                    <input></input></div>    
                <div><label>Gender</label>
                    <input></input></div>  
                <div><label>Martial Status</label>
                    <input></input></div>  
                </div>
        </div>
    </div>
    <style jsx>{`
        .container{
            display:flex;
            background:lightgreen;
            height:95vh;
            width:100%;
            // box-sizing:border-box;

        }
        .container1{
            width:25%;
            display:flex;
            border:3px solid red;
            justify-content:center;
            // align-items:center;
            padding-top:8rem;
        }
        .container1-1{
            display:flex;
            flex-direction:column;
            align-items:center;
            height:60%;
            // padding-top:20px; 
            // paddiing-bottom:20px; 

        }
       
        .container1 div{
            border:3px solid blue;
           
            // width:86%;
            display:flex;
            
        }
         .container1-1-1{
            
            border-radius:4.5rem;
            height:40%;
            width:48%;
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
            flex-direction:column
        }

        .container2{
            width:75%;
            border:3px solid red;
        }

            `}
    </style>
    </>
}