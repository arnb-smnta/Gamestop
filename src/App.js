import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import BrowsePage from "./Components/BrowsePage";
import GamePage from "./Components/GamePage";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appstore from "./ReduxComponents/appstore";

function App() {
  const id = 1234;
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/browse",
          element: <BrowsePage />,
        },
        { path: `/${id}`, element: <GamePage /> },
      ],
    },
  ]);
  return (
    <Provider store={appstore}>
      <div>
        <Header />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
