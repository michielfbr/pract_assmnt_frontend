import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchSpaceWithStories } from "../../store/spaces/actions";
import { selectSpace, selectSpaceStories } from "../../store/spaces/selector";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Space() {
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSpaceWithStories(id));
      }, [dispatch, id]);

    const space = useSelector(selectSpace)
    const stories = useSelector(selectSpaceStories)
 
    return (
        <Jumbotron>
           <h1>SpacePage</h1>

           <div>{!space || !stories ? (<Loading />) : (
               <div>
               <h1>{space.title}</h1>
               <h4>{space.description}</h4><br/>
                   
                   {stories.map(story =>{
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
            }) }</div>


         )
       }
    </div>



        </Jumbotron>
    );
  }
  