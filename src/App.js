import "./App.css";
import { AddColor } from "./AddColor";

// Component definition/declaration
// App - component
export default function App() {
  const users = [
    {
      name: "Vaibhav",
      pic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Tejaswini",
      pic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      name: "Shreyas",
      pic:
        "https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg"
    }
  ];
  return (
    <div className="App">
      {/* {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))} */}
      <AddColor />
    </div>
  );
}

// props - (like arguments in function)

// JSX  5 - 8 | JavaScript XML
// JSX -> Webpack + Babel ->  JS

// template syntax - {}
// Component Msg - Component definition/declaration
// 1. first letter must be capital
// 2. Return only one JSX element
// function Msg({ name, pic }) {
//   return (
//     <div className="msg-container">
//       <img className="profile-pic" src={pic} alt={name} />
//       <h1>Hello {name} 👋😎🎉🎉</h1>
//       <Counter />
//     </div>
//   );
// }
