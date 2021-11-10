import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { createStory } from "../../store/spaces/actions";

export default function NewStory() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const user = useSelector(selectUser)
    const spaceId = user.id

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserWithStoredToken());
      }, [dispatch]);

    const submit = event => {
        event.preventDefault();
    
        console.log("New story:", name, content, imageUrl, spaceId);
    
        dispatch(createStory(name, content, imageUrl, spaceId))

        setName("")
        setContent("")
        setImageUrl("")
      };

    return (
        <Jumbotron>
           {/* <h1>NewStoryPage</h1>
           <p>TODO: New Story Form</p> */}
           <form onSubmit={submit}>
      <h2>Post a cool story bro</h2>
      <p>
        <label>
          Name{" "}
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Content{" "}
          <input
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image url{" "}
          <input
            type="url"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
        </label>
      </p>
      {!imageUrl ? (<p></p>) : (<p><img src={imageUrl} alt="Image preview" width="300px"/></p>)}
      <p>
        <Button variant="primary" type="submit">Post new story</Button>
      </p>
    </form>
       </Jumbotron>
    );
  }