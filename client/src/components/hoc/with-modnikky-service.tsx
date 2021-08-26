import React from "react";
import { ModnikkyServiceConsumer } from "../mondnikky-service-context";
const withModnikkyService = ()  => (Wrapped: any) => {
  return (props: any) => {
    return (
      <ModnikkyServiceConsumer>
        {(modnikkyService) => {
          return <Wrapped {...props} modnikkyService={modnikkyService} />;
        }}
      </ModnikkyServiceConsumer>
    );
  };
};
export default withModnikkyService;
//  import React from "react";
// import { ModnikkyServiceConsumer } from "../mondnikky-service-context";
// export function withModnikkyService<T> (Wrapped: React.ComponentType<T> )  {
//   return class extends React.Component< T, {}> {
//     render() {
//         return (props: any) => {
//     return (
//       <ModnikkyServiceConsumer>
//         {(modnikkyService) => {
//           return <Wrapped {...props} modnikkyService={modnikkyService} />;
//         }}
//       </ModnikkyServiceConsumer>
//     );
//   };
//   }
//   }
// };
// export default withModnikkyService;
