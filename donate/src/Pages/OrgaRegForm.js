import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import '../Components/cssfiles/orgReg.css'
import imgorg from '../assets/images2.jpg'


import { useNavigate, Link } from 'react-router-dom';
import Navbr from '../Components/Navbr'
import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { jwtDecode } from "jwt-decode";
import Footer from '../Components/Footer';





function OrgaRegForm() {
    const navigate = useNavigate();
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const inputRef5 = useRef()
    const inputRef6 = useRef()

    const user = useAuthContext()
    const [orgAccess, setorgAccess] = useState(false)

    const active = localStorage.getItem('active')

    useEffect(() => {
        if (user && active === 'false') {
            setorgAccess(false)
        }
        if (user && active === 'true') {
            setorgAccess(true)
        }
    }, [user])



    if (user.user === null) {
        alert('you need to logged in')
    }

    // get the token and decode to id for adding in varify form

    const [error, setError] = useState(false)

    const token = localStorage.getItem('user')
    const parsetoken = JSON.parse(token)
    const usertoken = parsetoken.token

    const tokenObj = jwtDecode(usertoken)
    const auto_id = tokenObj._id
    console.log(auto_id)


    // 




    const verifyData = async () => {
        const Organization_full_name = inputRef1.current.value
        const Organization_register_number = inputRef2.current.value
        const District = inputRef3.current.value
        const pincode = inputRef4.current.value
        const contect_no = inputRef5.current.value
        const website_link = inputRef6.current.value

        const dataToVerify = { auto_id, Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link }


        const response = await fetch('https://donation-complete-solution-purnota-80e5.onrender.com/api/organization/verify', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(dataToVerify)
        })
        const json = await response.json()
        console.log(response)
        if (response.ok) {
            alert('data submitted successfully  pending for verification')
            navigate('/ing')
        }

        if (!response.ok) {
            setError(json.error)
            // alert(json.error)
        }


    }
    return (<>
        <Navbr />

        <div className="">&lt; About us  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis fugiat, distinctio repellat facere amet. Accusamus quaerat a qui voluptas eum tempora sequi necessitatibus voluptatem exercitationem consequuntur explicabo, incidunt nemo modi saepe doloribus quas perspiciatis assumenda eligendi tenetur. Error similique consequatur laudantium sequi doloribus.&gt;</div>



        <div className=" login-body form_att">


            <Form >
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Organization full name:</Form.Label>
                    <Form.Control type="name" ref={inputRef1} placeholder="Enter Organization Full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Organization register number: </Form.Label>
                    <Form.Control type="type" ref={inputRef2} placeholder="Organization register number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>District: </Form.Label>
                    <Form.Control type="waight" ref={inputRef3} placeholder="District" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>pincode: </Form.Label>
                    <Form.Control type="pincode" ref={inputRef4} placeholder="postel code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>contect no: </Form.Label>
                    <Form.Control type="Landmark" ref={inputRef5} placeholder="Contect Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>website link (optional): </Form.Label>
                    <Form.Control type="Landmark" ref={inputRef6} placeholder="example.com" />
                </Form.Group>

                {<div className='error' style={{ color: 'red' }}>{error}</div>}

                <Button className='btn1 mt-4' onClick={verifyData}>verify</Button>


                <Link
                    to={orgAccess ? "/org" : "/"}
                    onClick={(e) => {
                        if (!orgAccess) {
                            e.preventDefault();  // Prevent navigation
                            alert("You are not registered as an organization.");
                        }
                    }}
                    style={{ display: 'flex', justifyContent: "center" }}
                >F
                    Go to Org page
                </Link>

            </Form>
        </div>

        <Footer />




    </>
    );
}

export default OrgaRegForm;
