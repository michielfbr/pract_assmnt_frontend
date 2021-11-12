import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { deleteStory } from "../../store/spaces/actions";
import { selectSpace, selectMySpace, selectSpaceStories } from "../../store/spaces/selector";
import Loading from "../../components/Loading";

export default function MySpace() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserWithStoredToken());
      }, [dispatch]);

    const user = useSelector(selectUser)
    const spaceNstories = useSelector(selectMySpace)

    return (
        <Jumbotron>
           {/* <h1>My Space</h1> */}

           <div>{!spaceNstories ? (<Loading />) : (
               <div style={{backgroundColor: spaceNstories.userSpace.backgroundColor, color: spaceNstories.userSpace.color}}>
               <h1>Welcome to your space {user.name}!</h1>
               <h4>{spaceNstories.userSpace.description}</h4><br/>

                   <Link to="/space/me/newStory" style={{ textAlign: "center" }}>
                   <Button variant="primary">Post a cool story bro</Button>
                   </Link>
                   <Link to="/space/me/edit" style={{ textAlign: "center", margin: 10 }}>
                   <Button variant="primary">Edit my space</Button>
                   </Link>
                   <br/><br/>
                   <h4>Your stories:</h4>
                   {spaceNstories.userStories.map(story =>{
                return(
                    <div key={story.id}>
                    <img 
                    src={story.imageUrl}
                    alt={story.name}
                    width="200px"
                    />
                    <h4>{story.name}</h4>
                    <p></p>
                    <p>{story.content}</p>
                    <Button variant="primary" onClick={() => dispatch(deleteStory(story.id))}>Delete '{story.name}'</Button>
                    </div>
                )
            }) }
            </div>


         )
       }
    </div>
       </Jumbotron>
    );
  }