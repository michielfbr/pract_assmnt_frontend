import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { selectMySpace, selectSpaceStories } from "../../store/spaces/selector";
import Loading from "../../components/Loading";

export default function MySpace() {
    const dispatch = useDispatch();
    // const { id } = useParams()

    useEffect(() => {
        dispatch(getUserWithStoredToken());
      }, [dispatch]);
    const user = useSelector(selectUser)
    const space = useSelector(selectMySpace)
    const stories = useSelector(selectSpaceStories)
 
    return (
        <Jumbotron>
           {/* <h1>My Space</h1> */}

           <div>{!space ? (<Loading />) : (
               <div>
               <h1>Welcome to your space {user.name}</h1>
               <h4>{space.userSpace.description}</h4><br/>
                   
                   {/* {stories.map(story =>{
                return(
                    <div key={story.id}>
                    <img 
                    src={story.imageUrl}
                    alt="Cool Story Bro!"
                    width="200px"
                    />
                    <h4>{story.name}</h4>
                    <p></p>
                    <p>{story.content}</p>
                    </div>
        
                )
            }) } */}
            </div>


         )
       }
    </div>



        </Jumbotron>
    );
  }
  