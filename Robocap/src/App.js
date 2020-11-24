import React from "react";
// import { store } from "redux/store";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//components
import AppRouter from "components/AppRouter";

//styles
import "styles/App.scss";

function App() {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

  );
}

export default App;


// import Axios from "axios";
// import React from "react";

// class App extends React.Component {
//   state = {
//     Users: [],
//   };

//   componentDidMount() {
//     Axios.post(`http://10.2.0.201:8085/api/Login`).then((res) => {
//       console.log(res);
//       const Users = res.data;
//       this.setState({ Users });
//     });
//   }

//   render() {
//     return (
//       <>
//         <ul>
//           {this.state.Users.map((Users) => (
//             <li>{Users.name}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
// export default App;
