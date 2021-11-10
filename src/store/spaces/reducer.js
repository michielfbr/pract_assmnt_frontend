const initialState = {
    spaces:[],
  };
  
  export default function spaces(state = initialState, action) {
    switch (action.type) {
      case "spaces/allSpacesFetched": {
        return {
          ...state,
          spaces: action.payload.spaces
        };
      }
      case "spaces/spaceFetched": {
        return {
          ...state,
          space: action.payload.spaces
        };
      }
      default: {
        return state;
      }
    }
  }