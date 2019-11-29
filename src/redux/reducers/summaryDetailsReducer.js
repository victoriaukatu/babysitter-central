const summarydetails = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SUMMARY_DETAILS':
      return action.payload;
      default:
        return state;
    }
  };

  export default summarydetails;