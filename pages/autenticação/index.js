import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// isSignedIn ? (
//     <>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </>
//   ) : (
//     <>
//       <Stack.Screen name="SignIn" component={SignInScreen} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//     </>
//   )

//   if (state.isLoading) {
//     // We haven't finished checking for the token yet
//     return <SplashScreen />;
//   }



//        <Stack.Navigator>
//       {state.userToken == null ? (
//         // No token found, user isn't signed in
//         <Stack.Screen
//           name="SignIn"
//           component={SignInScreen}
//           options={{
//             title: 'Sign in',
//             // When logging out, a pop animation feels intuitive
//             // You can remove this if you want the default 'push' animation
//             animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//           }}
//         />
//       ) : (
//         // User is signed in
//         <Stack.Screen name="Home" component={HomeScreen} />
//       )}
//     </Stack.Navigator>
//   );
