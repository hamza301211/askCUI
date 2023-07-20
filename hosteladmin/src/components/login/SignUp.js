import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Select from "react-select"

export default function SignUp() {
  const navigate = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [contact, setContact] = useState("");
  const [facilities, setFacilities] = useState("");
  const [seats, setSeats] = useState("");
  const [rent, setRent] = useState("");

  var facilities_ = [
    {
      value: 1,
      label: "Air Conditioner" + " "
    },
    {
      value: 2,
      label: "Heater" + " "
    },
    {
      value: 3,
      label: "Hot water" + " "
    },
    {
      value: 4,
      label: "Food Mess" + " "
    },
    {
      value: 5,
      label: "Laundry" + " "
    },
    {
      value: 6,
      label: "Parking" + " "
    }
  ]

  var handleFacilities = (e) => {
    setFacilities(Array.isArray(e) ? e.map(x => x.label) : []);

  }

  function register() {

    createUserWithEmailAndPassword(auth, email, password).then((resp) => {
      let user = {
        email: resp.user.email,
        password: password,
        name: name,
        address: address,
        contact: contact,
        facilities: facilities,
        seats: seats,
        rent: rent,
      };
      // axios.post('https://askcui-985f2-default-rtdb.firebaseio.com/hostelList/'+user.uid+'.json',user)
      // .then((res)=>{
      //   console.log(res.data)
      //   alert("Hostel Client Created Successfully!")
      //   navigate.push('/UI')
      // })

      set(ref(db, "hostelList/" + resp.user.uid), user).then((res) => {
        console.log(res);
        alert("Hostel Client Created Successfully!");
        navigate.push("/UI");
      });
    });
  }

  return (
    <div className="container alignment d-flex">
      <div className="card">
        <div>
          <h5 className="header-text my-3 text-center fw-bolder">
            Register To askCUI
          </h5>
        </div>
        <form>
          <div className="row ">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="password" className=" form-label ">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <label htmlFor="name" className=" form-label ">
                Hostel Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="address" className=" form-label ">
                Address
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                onChange={(event) => setAdress(event.target.value)}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <label htmlFor="contact" className=" form-label ">
                Contact #
              </label>
              <input
                className="form-control"
                type="number"
                id="contact"
                name="contact"
                onChange={(event) => setContact(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="facilities" className=" form-label ">
                Facilities
              </label>
              <Select isMulti options={facilities_} onChange={handleFacilities}></Select>
              {/* <input
                className="form-control"
                type="text"
                id="facilities"
                name="facilities"
                onChange={(event) => setFacilities(event.target.value)}
              /> */}
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <label htmlFor="seats" className=" form-label ">
                Seats
              </label>
              <input
                className="form-control"
                type="text"
                id="seats"
                name="seats"
                onChange={(event) => setSeats(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="rent" className=" form-label ">
                Rent
              </label>
              <input
                className="form-control"
                type="number"
                id="rent"
                name="rent"
                onChange={(event) => setRent(event.target.value)}
              />
            </div>
          </div>
        </form>

        <div className="d-flex flex-row justify-content-center align-items-center">
          {/* <button class="text-light mt-5 sign-in-button" onClick={signIn}>Login</button> */}
          <button className="mx-3 mt-5  sign-up-button" onClick={register}>
            {" "}
            Register
          </button>
          <button
            className="btn button-size mt-5"
            onClick={() => navigate.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}