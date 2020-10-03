import React, { Component } from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    window.addEventListener("load", () => {
    this.setState({
      loaded: true,
    });
  })
  }
  render() {
    return (
      <>
        {this.state.loaded ? 
          <>
            <Navigation />
            <Home />
            <Footer />
          </>
         : 
          <Preloader />
        }
      </>
    );
  }
}

// function App() {
//   var [state, setState] = useState(false);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     window.addEventListener("load", () => {
//       console.log(state)
//       setState(state=true)
//       console.log(state)
//     });
//   });

//   return (
//     <>
//       {state ? <>
//           <Navigation />
//             <Home />
//           <Footer />
//           </>
//           : (
//         <Preloader />
//       )}
//     </>
//   );
// }

export default App;
