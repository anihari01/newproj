import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>{props.h1}</h1>
                <h3>{props.subtitle}</h3>
              </div>
              
              <div className={classes.infosection}>
                <label>Mobile No.</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Email-id</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Password</label>
                <span>Sahil</span>
              </div>
            </div></>
  )
}
