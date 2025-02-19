import axios from 'axios'
import { IoIosNotifications } from "react-icons/io";
import Table from 'react-bootstrap/Table';
import { MdHome } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import './adminPanel.css'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext.js';
import Button from 'react-bootstrap/esm/Button.js';

function AdminPanel() {

    const [state, setstate] = useState({});
    const [count, setcount] = useState(0)
    const [countActive, setcountActive] = useState(0)
    const navigate = useNavigate();



    const role = localStorage.getItem('role')
    console.log("2role", role)
    const baseUrl = 'http://localhost:4000/api/organization/';
    const baseUrl2 = 'http://localhost:4000/api/user/userCount';
    const { user } = useAuthContext()
    console.log('role')
    const [pst, setPst] = useState(null);
    useEffect(() => {






        if (user && role === 'ADMIN') {

            const getData = async () => {
                await axios.get(baseUrl, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                }).then((response) => {
                    setPst(response.data)


                    
                    const storedState = JSON.parse(localStorage.getItem('buttonState'));
                    
                    if (storedState) {
                        setstate(storedState);
                    } else {
                        // Initialize state with default values
                        const initialstate = {}
                        response.data.forEach(item => {
                            initialstate[item.auto_id] = true
                        })
                        setstate(initialstate);
                    }

                });

                axios.get(baseUrl2, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                }).then((response) => {
                    setcount(response.data.count)
                    setcountActive(response.data.countActive)
                    // console.log('responsnjke',response.data.count)
                })

            }
            // axios.get(baseUrl, {
            // headers: { 'Authorization': `Bearer ${user.token}` }
            // }).then((response) => {
            // setPst(response.data)
            // });
            getData()









        }



    }, [user])
    if (!pst) return null;
    console.log(pst.name);
    const pduct = pst.map(({ name, type }) => {
        return name, type;
    })



    // function grantPermission(userId) {
    // localStorage.setItem({ 'active': 'true' })
    // }



    const buttonClick = async (id) => {
        const cng_permissionURL = `http://localhost:4000/api/user/permission/${id}`
        console.log(cng_permissionURL);
        const currentState = state[id];
        const newState = !currentState;
        //need to learn
        setstate(prevStates => ({
            ...prevStates,
            [id]: !prevStates[id]
        }));
        // Update local storage with new state
        localStorage.setItem('buttonState', JSON.stringify({
            ...state,
            [id]: !state[id]
        }));




        await axios.get(`http://localhost:4000/api/user/getuser/${id}`, {
            responseType: "json",
        })
            .then(function (response) {
                const userdata = response.data.active
                console.log(userdata);


                if (role === 'ADMIN') {

                    const patchData = async () => {

                        if (userdata === false) {

                            axios.patch(cng_permissionURL, {
                                active: true
                            }).then(respone => console.log(respone.data))
                                .catch(error => console.log(error))
                        }
                        else {

                            axios.patch(cng_permissionURL, {
                                active: false
                            }).then(respone => console.log(respone.data))
                                .catch(error => console.log(error))

                        }
                    }
                    patchData()
                }
            });



    }

    
    const toHome=()=>{
        navigate('/')
     }


    return (
        <>
            <div className='heading'>
                <div className='heading_1'>Admin panel</div>
                <div className='heading_2' onClick={toHome}><MdHome /></div>
            </div>
            <div className='main_b'>
                <div className='main' id='c1'>
                    <h1 className='mt_txt'>12</h1>
                    <h6>optional 1</h6>
                </div>
                <div className='main' id='c2'><h1 className='mt_txt'>{count}</h1>
                    <h6>Total no of user</h6></div>
                <div className='main' id='c3'><h1 className='mt_txt'>{countActive}</h1>
                    <h6>No of varified organization</h6></div>
                <div className='main' id='c4'><h1 className='mt_txt'>12</h1>
                    <h6>optional 2</h6></div>
            </div><br /><br /><br /><br />

            <div className='div_req'>
                <h3>Verification Request</h3>
            </div>

            <div>
                <table className='table table-hover table-bordered' style={{ fontSize: '13px' }} >
                    <thead>
                        <tr>

                            <th>Organization Name</th>
                            <th>Organization register number</th>
                            <th>District (kg)</th>
                            <th>Pincode</th>
                            <th>contect no</th>
                            <th>Website link</th>
                            <th>Access grant</th>
                            {/* <th>Access delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pst.map((item, index) => (
                                <>
                                    {console.log(item)}
                                    <tr>
                                        <td>{item.Organization_full_name}</td>
                                        <td>{item.Organization_register_number}</td>
                                        <td>{item.District}</td>
                                        <td>{item.pincode}</td>
                                        <td>{item.contect_no}</td>
                                        <td>{item.website_link}</td>
                                        {/* <td><Button className=" btn btn-success position-sticky float-end mx-2" onClick={() => buttonClick(item.auto_id)}>{state}</Button></td> */}
                                        <td><Button id={item.auto_id} className={(state[item.auto_id] ? 'btn btn-danger position-sticky float-end mx-2' : 'btn btn-success position-sticky float-end mx-2')} onClick={() => buttonClick(item.auto_id)}>{
                                            state[item.auto_id] ? 'revoke' : 'grant'
                                        }</Button></td>
                                        {/* <td><Button className=" btn btn-danger position-sticky float-end mx-2">DELETE</Button></td> */}

                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </>
    );
}

export default AdminPanel;