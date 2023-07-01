export const setSearchData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "searchData",
      payLoad: data,
    });
  };
};
