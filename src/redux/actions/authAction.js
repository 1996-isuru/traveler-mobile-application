// import { CHECK_USER, REGISTER_USER, API_URL } from "./types";

// // import axios from "axios";
// // //register
// // export const register = (payload) => {
// //   // console.log(JSON.stringify(payload));
// //   return function (dispatch) {
// //     axios.post("http://localhost:8070/user/add", payload).then((res) => {
// //       dispatch({
// //         type: REGISTER_USER,
// //         payload: res.data,
// //       }).catch((err) => console.log(err));
// //     });
// //   };
// // };

// // export const register = (payload) => {
// //   // console.log(JSON.stringify(payload));
// //   const dataa = JSON.stringify(payload);
  
// //     axios.post("http://localhost:8070/user/add", dataa).then(() => {
// //     console.log("user added")
// // })
// //     .catch((error) => { console.log(error);
// //     });
  
// // };



// // export const register = (payload) => {
// //  const data = JSON.stringify(payload);
// //   axios({
// //     method: 'POST',
// //     usrl: 'http://localhost:3000/user/add',
// //     data,
// //     headrs: {
// //       'content-type':'application/json'
// //     },
// //   })
// //   .then((rea) => {
// //     dispatch({type: CLEAR_ERRORS, payload: null});
// //     dispatch({type: REGISTER_SUCCESS, payload: res.data});
// //   })
// //   .catch((err) => {
// //     dispatch({type: REGISTER_FAIL, payload: null});
// //     dispatch(
// //       returnErrors(err.responce.data, err.responce.status, 'REGISTER_FAIL')
// //     )
// //   })
// // };

// //login
// export const login = (payload) => {
//   console.log(JSON.stringify(payload));
//   return {
//     type: CHECK_USER,
//     payload,
//   };
// };

// //   export default login;
