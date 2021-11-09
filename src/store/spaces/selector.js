export const selectAllSpaces = reduxState => {
    return reduxState.spaces.spaces;
  };

export const selectSpace = reduxState => {
    return reduxState.spaces.space.spaceById;
  };

// export const selectSpaceStories = reduxState => {
//     return reduxState.spaces.space.stories;
//   };

export const selectSpaceStories = reduxState => {
  if (!reduxState.spaces.space.stories) {
    return null
  } else {
    const stories = reduxState.spaces.space.stories
    return stories.sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1
    });
  }
  };