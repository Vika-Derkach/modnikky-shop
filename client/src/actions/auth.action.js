const userRequested = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

const userLoaded = (newClothes) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: newClothes,
  };
};

const authUserError = (error) => {
  return {
    type: "FETCH_AUTH_FAILURE",
    payload: error,
  };
};
const storageName = "userData";
const fetchUser = (AuthService, dispatch) => async () => {
  // dispatch(clothesRequested());

  AuthService.registerUser()
    .then((data) => {
      localStorage.setItem(
        storageName,
        JSON.stringify({
          userId: data.id,
          token: data.jwtToken,
        })
      );
      dispatch(userLoaded(data));
    })
    .catch((err) => dispatch(authUserError(err)));
};
export { fetchUser };
