import axios from "axios";
import { apiUrl } from "../../config/constants";


  export function fetchAllSpaces() {
    return async function thunk(dispatch, getState) {
      const response = await await axios.get(`${apiUrl}/spaces`)

      const spaces = response.data
      console.log("allSpaces", spaces)
  
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