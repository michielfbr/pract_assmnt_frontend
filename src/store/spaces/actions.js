import axios from "axios";
import { apiUrl } from "../../config/constants";
import { getUserWithStoredToken } from "../../store/user/actions";
import { showMessageWithTimeout } from "../appState/actions";

  export function fetchAllSpaces() {
    return async function thunk(dispatch, getState) {
      const response = await await axios.get(`${apiUrl}/spaces`)

      const spaces = response.data
      // console.log("allSpaces", spaces)
  
      dispatch(
        spacesFullyFetched({
          spaces
        })
      );
    };
  }

  export function spacesFullyFetched(data) {
    return {
      type: "spaces/allSpacesFetched",
      payload: data,
    }
  }

  export function fetchSpaceWithStories(id) {
    return async function thunk(dispatch, getState) {
      const response = await axios.get(`${apiUrl}/spaces/${id}`)

      const spaces = response.data
      console.log("Space fetched", spaces)
  
      dispatch(
        spaceFullyFetched({
          spaces
        })
      );
    };
  }

  export function spaceFullyFetched(data) {
    return {
      type: "spaces/spaceFetched",
      payload: data,
    }
  }

  export const newSpace = (title, userId) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(`${apiUrl}/spaces`, {
          title,
          userId
        });
        const newSpace = response.data
        console.log("New space:", newSpace)

      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);

        } else {
          console.log(error.message);
        }
      }
    };
  };

  export function deleteStory(storyId) {
    // console.log("Delete this story",storyId)
    return async function thunk(dispatch, getState) {
      const response = await axios.delete(`${apiUrl}/stories/${storyId}`)
  
      dispatch(
        getUserWithStoredToken()
      );

      dispatch(
      showMessageWithTimeout("success", false, "Story deleted")
      )

    };
  }

  export function createStory( name, content, imageUrl, spaceId, token ) {
    // console.log("Delete this story",storyId)
    return async function thunk(dispatch, getState) {
      const newStory = await axios.post(`${apiUrl}/stories/`, {
        name: name,
        content: content,
        imageUrl: imageUrl,
        spaceId: spaceId
      },{
        headers: { Authorization: `Bearer ${token}` }
      })
  
      dispatch(
        showMessageWithTimeout("success", false, "Story posted on your space!")
      );
    };
  }

  export function updateSpace( spaceId, title, description, backgroundColor, color, token ) {
    // console.log("Delete this story",storyId)
    return async function thunk(dispatch, getState) {
      const newStory = await axios.put(`${apiUrl}/spaces/${spaceId}`, {
        title: title,
        description: description,
        backgroundColor: backgroundColor,
        color: color
      },{
        headers: { Authorization: `Bearer ${token}` }
      })
  
      dispatch(
        showMessageWithTimeout("success", false, "Space updated!")
      );
    };
  }