import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../pages/context/AuthProvider';
import classes from './auth-form.module.css';
import Link from 'next/link'
//import axios from '../../pages/api/axios';
import axios from 'axios';
import { useRouter } from 'next/router';
const LOGIN_URL = '';

function AuthForm(props) {
  //console.log(props);
  const {SetAuth} = useContext(AuthContext);
  //console.log(props);
  const inputfnameref = useRef();
  const inputpassref =useRef();
  const route = useRouter();


  // const [user, setUser] = useState('');
  //const [pwd, setPwd] = useState('');
  //const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);
  //const { setAuth } = useContext(AuthContext);

  /* useEffect(() => {
    userRef.current.focus();
}, []) */

// useEffect(() => {
//     setErrMsg('');
// }, [user, pwd])


 async function handleSubmit(e) {
    e.preventDefault();
  //const data= {firstName:'John',password:'johnny'}

  const data= {firstName:inputfnameref.current.value,password:inputpassref.current.value}
  //console.log(data);
  try{
    const response = await axios.post('https://pax-poc.herokuapp.com/api/v1/login', 
      data
      );
      const pax_id = {body:response.data.body,fname:inputfnameref.current.value,status:response.data.status}
      // setUser({pax_id})
      //  SetAuth(user)
      // console.log(response.data)
      // console.log(props.auth);
      // console.log(inputfnameref.current.value);

      if(response.data.body === "null")
   {
    localStorage.setItem('user',JSON.stringify(pax_id));
    route.push('/Profileform');
    
    
   }
  //  if(response.data.status === false){alert(response.data.body)}
   else{
    localStorage.setItem('user',JSON.stringify(pax_id));
    // localStorage.setItem('username',inputfnameref.current.value)
     
    route.push('./profilei')
   }
  }  catch(err)
  {
    console.log(err);

  }
  //console.log(auth);
  //setUser('');
  //setPwd('');
  //setSuccess(true);
}     

  // const [isLogin, setIsLogin] = useState(true);

  /* function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }  */

  

  return (



    <div className={classes.container}>
    <section className={classes.auth}>

      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='fname'>Your Email</label>
          <input type='text' id='fname' ref={inputfnameref} autoComplete="off"  required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={inputpassref} required />
        </div>
        <div className={classes.actions}>
          {/* <span>
        <Link href= './profilei' className={classes.btn}>Login</Link></span> */}
        <button> Login </button>
          {/* <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </section>
    </div>

  );
}

export default AuthForm;
