import { Switch } from "react-router-dom";
import BottomPart from "./parts/bottomPart";
import Nawbar from "./parts/nawbar";
import Main from "./parts/main";


function App() {
  return (
    <div >
      <Nawbar></Nawbar>
      <Main></Main>

      <BottomPart></BottomPart>
    </div>
  );
}

export default App;
