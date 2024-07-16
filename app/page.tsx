import { Provider } from "react-redux";
import store from "./store/resumeStore";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <div>Next Js App</div>
      </main>
    </Provider>
  );
}
