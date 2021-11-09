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