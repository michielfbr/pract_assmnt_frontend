import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchAllSpaces } from "../../store/spaces/actions";

export default function Home() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSpaces());
      }, [dispatch]);
  
    return (
        <Jumbotron>
           <h1>Home</h1>
        </Jumbotron>
    );
  }
  