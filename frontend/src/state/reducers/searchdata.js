const reducer = (state = "google", action) => {
  if (action.type === "searchData") {
    return (state = action.payLoad);
  } else {
    return state;
  }
};

// exporting the module
export default reducer;