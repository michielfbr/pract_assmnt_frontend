import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchAllSpaces } from "../../store/spaces/actions";
import { selectAllSpaces } from "../../store/spaces/selector";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Home() {
    
    const dispatch = useDispatch();

    const spaces = useSelector(selectAllSpaces)

    useEffect(() => {
        dispatch(fetchAllSpaces());
      }, [dispatch]);
  
    return (
        <Jumbotron>
           <h1>Home</h1>

           <div>{!spaces ? (<Loading />) : (
    <div>{spaces.map(space =>{
        return(
            <div key={space.id}>
            <h4>{space.title}</h4>
            <p>{space.description}</p>
            <p><Link to={`/space/${space.id}`}>
                <button>Visit space</button>
            </Link><br/></p>
            </div>

        )
    }) }</div>


         )
       }
    </div>



        </Jumbotron>
    );
  }
  