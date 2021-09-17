import { call, put, takeEvery } from "redux-saga/effects";
import { clothesError, clothesLoaded } from "../actions";
import { clothesAction } from "../actionTypes";
import ModnikkyService from "../services/modnikky-service";

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

export default function* clothesSaga() {
  //   yield fork(routeChangeSaga);
  yield takeEvery(clothesAction.FETCH_CLOTHES_REQUEST, loadClothesList);
  //   yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}
