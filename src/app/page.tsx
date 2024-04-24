import { Provider } from "react-redux";
import LayOut from "./Layout/LayOut";
const  Home=()=> {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <LayOut/>
    </main>
  );
}

export default Home