import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser, selectMySpace, selectToken } from "../../store/user/selectors";
import { updateSpace } from "../../store/spaces/actions";
import { Col } from "react-bootstrap";

export default function EditMySpace() {
    const mySpace = useSelector(selectMySpace)
    const [title, setTitle] = useState(mySpace.title);
    const [description, setDescription] = useState(mySpace.description);
    const [backgroundColor, setBackgroundColor] = useState(mySpace.backgroundColor);
    const [color, setColor] = useState(mySpace.color);
    const spaceId = mySpace.id
    const token = useSelector(selectToken);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(selectUser);
      }, [dispatch]);

    const submitForm = event => {
        event.preventDefault();
    
        // console.log("index.js: Update space:", spaceId, title, description, backgroundColor, color, token);
    
        dispatch(updateSpace(spaceId, title, description, backgroundColor, color, token))
        history.push("./");

        // setName("")
        // setContent("")
        // setImageUrl("")
      };

    return (
        <Container>
           {/* <h1>Edit My Space</h1>
           <p>TODO: Edit my space form</p> */}
           <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Edit My Space</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder=""
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type="text"
            placeholder=""
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Background Color</Form.Label>
          <Form.Control
            value={backgroundColor}
            onChange={event => setBackgroundColor(event.target.value)}
            type="color"
            placeholder=""
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Color</Form.Label>
          <Form.Control
            value={color}
            onChange={event => setColor(event.target.value)}
            type="color"
            placeholder=""
            required
          />
        </Form.Group>
        
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Update my space
          </Button>
        </Form.Group>
        {/* <Link to="/login">Click here to log in</Link> */}
      </Form>
           {/* <form onSubmit={submit}>
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
    </form> */}
       </Container>
    );
  }