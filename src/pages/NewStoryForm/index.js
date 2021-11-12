import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser, selectToken } from "../../store/user/selectors";
import { createStory } from "../../store/spaces/actions";

export default function NewStory() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const user = useSelector(selectUser)
    const spaceId = user.id
    const token = useSelector(selectToken);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getUserWithStoredToken());
      }, [dispatch]);

    const submit = event => {
        event.preventDefault();
    
        console.log("New story:", name, content, imageUrl, spaceId);
    
        dispatch(createStory(name, content, imageUrl, spaceId, token))

        setName("")
        setContent("")
        setImageUrl("")
        history.push("./");
      };

    return (
        <Container>
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
            placeholder="Name your story bro"
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
            placeholder="Now tell us the story"
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
            placeholder="Paste URL to an image"
          />
        </label>
      </p>
      {!imageUrl ? (<p></p>) : (<p><img src={imageUrl} alt="Image preview" width="300px"/></p>)}
      <p>
        <Button variant="primary" type="submit">Post new story</Button>
      </p>
    </form>
       </Container>
    );
  }