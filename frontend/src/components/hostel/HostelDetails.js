import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./HostelUI.css";
import Collapse from "react-bootstrap/Collapse";

export default function HostelDetails({
  fname,
  lname,
  hostelname,
  address,
  contact,
  facilities,
  rent,
  seats,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mt-5 container "
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          className="card"
          style={{
            marginBottom: "10px",
            // marginLeft: "65px",
            // width: "115ch",
            background: "rgb(196 226 255)",
          }}
        >
          <div
            className="card-header "
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          >
            <div className="container mt-3">
              <div className="row">
                <div className="col-sm-11">
                <p className=" fw-bolder">
                  Hostel Name
                </p>
                <p >{hostelname}</p>
                </div>
                
                
                {open ? (
                  <div className="col-sm-1 mt-3"
                    style={{
                      // marginLeft: "900px",
                      // marginTop: "20px",
                      color: "red",
                    }}
                  >
                    "➖"
                  </div>
                ) : (
                  <div  className="col-sm-1 mt-3">
                    "➕"
                  </div>
                )}
              </div>
            </div>
          </div>
          <Collapse in={open}>
            <div className="text-center mt-3">
              <p>
                <b className="mt-5">Owner Name : </b> {fname} {lname}
              </p>
              <p>
                <b className="mt-5">Location : </b> {address}
              </p>
              <p>
                <b className="">Contact : </b> {contact}
              </p>
              <p>
                <b className="">Facilities : </b> {facilities}
              </p>
              <p>
                <b className="">Rent : </b>Rs. {rent}
              </p>
              <p>
                <b className="">Seats : </b> {seats}
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
