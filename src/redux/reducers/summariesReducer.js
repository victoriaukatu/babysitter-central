const summaries = (state = [], action) => {
    switch (action.type) {
      case 'SET_SUMMARIES':
        return action.payload;
      default:
        return state;
    }
  };


  export default summaries;