// import React, { useState, useEffect } from "react";
// import { Linking, Platform } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomePage from "./homePage/HomePage";

// export default function RenderUI() {
//   // const linking = {
//   //   config: {
//   //     screens: {
//   //       home: {
//   //         path: "/",
//   //         screens: {
//   //           getQuotes: {
//   //             path: "",
//   //           },
//   //           trackShipment: {
//   //             path: "consignment/shipment-tracking",
//   //           },
//   //           aboutUs: {
//   //             path: "consignment/about-us",
//   //           },
//   //           availableJobs: {
//   //             path: "consignment/available-jobs",
//   //           },
//   //         },
//   //       },
//   //     },
//   //   },
//   // };
//   // const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

//   // const [isReady, setIsReady] = React.useState(Platform.OS === "web"); // Don't persist state on web since it's based on URL
//   // const [initialState, setInitialState] = React.useState();

//   // React.useEffect(() => {
//   //   const restoreState = async () => {
//   //     try {
//   //       const initialUrl = await Linking.getInitialURL();

//   //       if (initialUrl == null) {
//   //         // Only restore state if there's no deep link
//   //         const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
//   //         const state = savedStateString
//   //           ? JSON.parse(savedStateString)
//   //           : undefined;

//   //         if (state !== undefined) {
//   //           setInitialState(state);
//   //         }
//   //       }
//   //     } finally {
//   //       setIsReady(true);
//   //     }
//   //   };

//   //   if (!isReady) {
//   //     restoreState();
//   //   }
//   // }, [isReady]);

//   // if (!isReady) {
//   //   return null;
//   // }
//   const linking = {}

//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer
//       linking={linking}
//       onStateChange={(state) =>
//         AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
//       }
//     >
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }