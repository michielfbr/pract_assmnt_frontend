export const selectAllSpaces = reduxState => {
    return reduxState.spaces.spaces;
  };

export const selectSpace = reduxState => {
    return reduxState.spaces.space.spaceById;
  };

// UNSORTED
// export const selectSpaceStories = reduxState => {
//     return reduxState.spaces.space.stories;
//   };

// SORTED: New -> old
export const selectSpaceStories = reduxState => {
  if (!reduxState.spaces.space.stories) {
    return null
  } else {
    const stories = reduxState.spaces.space.stories
    return stories.sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1
    });
  }
  };

  export const selectMySpace = reduxState => {
    return reduxState.user;
  };