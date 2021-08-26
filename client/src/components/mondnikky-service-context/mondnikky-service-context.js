import React from "react";
// import ModnikkyService from "../../services/modnikky-service";
// import { applicationStateTypes } from "../../types/reducerTypes";
// interface IContextProps {
//   state?: applicationStateTypes;
//   dispatch?: ({ type }: { type: string }) => void;
//   value: ModnikkyService;
// }
const { Provider: ModnikkyServiceProvider, Consumer: ModnikkyServiceConsumer } =
  React.createContext();
export { ModnikkyServiceProvider, ModnikkyServiceConsumer };
