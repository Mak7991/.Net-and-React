import axios from "axios";

const API_URL = "http://10.2.0.201:8885/api/login";

// const data = await axios.post(API_URL, {
//   query: `mutation updateUserCity($id: Int!, $city: String!) {
//     updateUserCity(userID: $id, city: $city){
//       id
//       name
//       age
//       city
//       knowledge{
//         language
//         frameworks
//       }
//     }
//   }`,
//   variables: {
//     id: 2,
//     city: 'Test'
//   }
// }, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
  

//login
export const userLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoginInProgress());
    try {
      const response = await client.query({
        query: login,
        variables: {
          data: {
            email,
            password,
          },
        },
      });
      const { data } = response;
      localStorage.setItem("token", data.login.token);
      if (data.login.student) {
        dispatch(setLoginSuccess(data.login.student));
        localStorage.setItem("id", data.login.student.id);
        localStorage.setItem("email", data.login.student.email);
      } else if (data.login.teacher) {
        dispatch(setLoginSuccess(data.login.teacher));
        localStorage.setItem("id", data.login.teacher.id);
        localStorage.setItem("email", data.login.teacher.email);
      } else if (data.login.superAdmin) {
        dispatch(setLoginSuccess(data.login.superAdmin));
        localStorage.setItem("id", data.login.superAdmin.id);
        localStorage.setItem("email", data.login.superAdmin.email);
      }
      return data;
    } catch (err) {
      dispatch(setLoginError(err.message));
      return err;
    }
  };
};

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
