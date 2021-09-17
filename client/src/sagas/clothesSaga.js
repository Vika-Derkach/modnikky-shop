import { call, put, takeEvery } from "redux-saga/effects";
import { clothesError, clothesLoaded } from "../actions";
import ModnikkyService from "../services/modnikky-service";
// import {
//     clothesRequested,
//   LOAD_USERS_FAILURE,
//   LOAD_USERS_SUCCESS,
// } from "../../reducers/people/actions";

//worker
// export function* loadPeopleDetails({ payload }) {
//   const { id } = payload;
//   try {
//     const request = yield call(fetch, `https://swapi.dev/api/people/${id}`);
//     const data = yield apply(request, request.json);
//     yield put({
//       type: LOAD_USER_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (e) {
//     yield put({
//       type: LOAD_USER_DETAILS_FAILURE,
//       payload: e,
//     });
//   }
// }
//worker
export function* loadClothesList({ payload }) {
  //   const { page, search } = payload;
  try {
    const modnikkyService = new ModnikkyService();
    const data = yield call(modnikkyService.getClothes);
    console.log({ data });
    yield put(clothesLoaded(data));
  } catch (e) {
    console.log({ e });
    yield put(clothesError(e));
  }
}
//watcher
// export function* routeChangeSaga() {
//   while (true) {
//     const action = yield take(LOCATION_CHANGE);
//     if (
//       matchPath(action.payload.location.pathname, getRouteConfig(MAIN_ROUTE))
//     ) {
//       const state = yield select(selectPeople);
//       const { page, search } = state;
//       yield put({
//         type: LOAD_USERS,
//         payload: {
//           page,
//           search,
//         },
//       });
//     }
//     const detailsPage = matchPath(
//       action.payload.location.pathname,
//       getRouteConfig(PEOPLE_DETAILS_ROUTE)
//     );
//     if (detailsPage) {
//       const { id } = detailsPage.params;
//       if (id) {
//         yield put({
//           type: LOAD_USER_DETAILS,
//           payload: {
//             id,
//           },
//         });
//       }
//     }
//   }
// }`
//watcher
const actions = {
  FETCH_CLOTHES_REQUEST: "FETCH_CLOTHES_REQUEST",
};
export default function* clothesSaga() {
  //   yield fork(routeChangeSaga);
  yield takeEvery(actions.FETCH_CLOTHES_REQUEST, loadClothesList);
  //   yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}
