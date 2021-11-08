const initialState = {
    spaces:[],
  };
  
  export default function spacesReducer(state = initialState, action) {
    switch (action.type) {
      case "spaces/allSpacesFetched": {
        return {
          spaces: action.payload.spaces
        };
      }
      default: {
        return state;
      }
    }
  }