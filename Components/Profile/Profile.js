
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
dsd
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
            width:29%;
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
            width:70%;
            border:3px solid red;
        }

        // Container 2
        .container2-1{

            display:flex;
            border:6px solid blue;
            flex-direction:column;
            padding-top:20px;
            align-items:center;
            background:white;
        }
        .contianer-box {
            border:2px solid black;\
            display:flex;
            background:white;
            border-radius:20px;
            width:90%
        }

        .heading-section {
            border:2px solid orange;
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
        margin-bottom:20px;
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

    

            `}
    </style>
    </>
}