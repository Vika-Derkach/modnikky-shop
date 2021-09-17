import { all, spawn } from "redux-saga/effects";
import clothesSaga from "./clothesSaga";

export default function* rootSaga() {
  const sagas = [clothesSaga];
  yield all(sagas.map((s) => spawn(s)));
}
