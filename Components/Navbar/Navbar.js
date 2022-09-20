
export function NavBar(){

    return<>
    <div className="container">
    <div className="navigation">
        <div className="logo">
        <span>NeU TRavEL</span>
        </div>
        <div className="alpha-container">
        <div className="alphabet">P</div>
        <div className="alphabet">R</div>
        <div className="alphabet">O</div>
        <div className="alphabet">F</div>
        <div className="alphabet">I</div>
        <div className="alphabet">L</div>
        <div className="alphabet">E</div>
        </div>
        <div>
            <ul className="nav-item">
                <li className="nav-items">Logout</li>
            </ul>
        </div>

    </div>
    </div>

    <style jsx>{`
    .container{
        width:100vw;
        display:flex;
        align-items:center;
        justify-content:center;

    }
    .navigation{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:80%;

    }
    .logo {

    }
    .logo span{
        font-weight:bold;
    }
    .alpha-container{
        display:flex;
        justify-conten-space-around;
    }
    .alphabet{
        font-weight:bolder;
        margin-right:1rem;
        margin-left:1rem;
    }
    .nav-item{
    list-style:none;
    }
    .nav-items{
    font-weight:bold;      
    }
    `}</style>
    </>
}