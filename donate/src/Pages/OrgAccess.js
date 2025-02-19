import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbr from '../Components/Navbr.js'
import { useAuthContext } from '../hooks/useAuthContext.js';
import Popp from './Fpage/Popp.js';

function OrgAccess() {


  const [showPopup, setShowPopup] = useState(false)
  const [ownerEmail, setownerEmail] = useState(false)
  const [btnClick, setbtnClick]= useState({})


  const active = localStorage.getItem('active')
  // console.log("active4", !!active) //true

  const baseUrl = 'http://localhost:4000/api/oldThs/all';
  const { user } = useAuthContext();


  const pickUpclick=(id)=>{
    setbtnClick((prevState) => {
      const newState = { ...prevState, [id]: false };
      localStorage.setItem('btnClickState', JSON.stringify(newState));
      return newState;
    });
    
  }

  useEffect(() => {
    const storedBtnClickState = JSON.parse(
      localStorage.getItem('btnClickState')
    );
    if (storedBtnClickState) {
      setbtnClick(storedBtnClickState);
    }
  }, []);


  const buttonClick =  async (email) => {
    console.log(email);
    setownerEmail(email);
    setShowPopup(true);


    axios.post('http://localhost:4000/api/organization/sndMail', {email})

      .then(respone => {
          console.log("email data sent successfully", respone.data)
      })
      .catch(error => {
          console.log("error:", error)
      })
    
  }



  const handleClose = () => {
    setShowPopup(false);
  };


  const [pst, setPst] = useState(null);

  useEffect(() => {

    if (user && active === 'true') {

      axios.get(baseUrl, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      }).then((response) => {
        setPst(response.data)

        const initialBtnClickState = {};
        response.data.forEach((item) => {
          initialBtnClickState[item._id] = true;
        });
        const storedBtnClickState = JSON.parse(
          localStorage.getItem('btnClickState')
        );
        setbtnClick(storedBtnClickState || initialBtnClickState);
      });
  }


  }, [user])

  if (!pst) return null;

  console.log(pst);

  const pduct = pst.map(({ name, type }) => {
    return name, type;
  })
  console.log(pst);





  return (
    <div>
      <Navbr />
      <table className='table table-hover table-bordered' style={{ fontSize: '13px' }} >
        <thead>
          <tr>
            <th> Name</th>
            <th>Product Type</th>
            <th>Waight (kg)</th>
            <th>email</th>
            <th>Pincode</th>
            <th>Landmark</th>
            <th >PickUp Request</th>
          </tr>
        </thead>
        <tbody>
          {
            pst.map((item, index) => (

              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.weight}</td>
                  <td>{item.email}</td>
                  <td>{item.pincode}</td>
                  <td>{item.landmark}</td>
                  <td >
                   { /*btnClick[item._id] &&*/(<button className="py-0 m-1 btn btn-primary position-sticky float-right" onClick={() => buttonClick(item.email)}>Ready to pick up</button>)}<br />
                    {/* <button className="py-0 m-1 btn btn-success position-sticky float-right"onClick={()=>pickUpclick(item._id)} >pick up complete</button> */}
                  </td>
                </tr>
              </>


            ))
          }
{/* <Popp data={item.email} /> */}
        </tbody>
      </table>
      {showPopup && <Popp ownerEmail={ownerEmail} onClose={handleClose}  />}
    </div>
  );
}
export default OrgAccess;