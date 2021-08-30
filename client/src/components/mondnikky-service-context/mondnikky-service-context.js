import React from "react";
// import ModnikkyService from "../../services/modnikky-service";
// import { IApplicationState } from "../../types/reducerTypes";
// interface IContextProps {
//   state?: IApplicationState;
//   dispatch?: ({ type }: { type: string }) => void;
//   value: ModnikkyService;
// }
const { Provider: ModnikkyServiceProvider, Consumer: ModnikkyServiceConsumer } =
  React.createContext();
export { ModnikkyServiceProvider, ModnikkyServiceConsumer };
