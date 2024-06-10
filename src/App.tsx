import Enter from "./pages/Enter.tsx";
import Apps from "./pages/Apps.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Boosts from "./pages/Boosts.tsx";
import League from "./pages/League.tsx";
import WebApp from "@twa-dev/sdk";
import Fren from "./pages/Fren.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { TurboSliceType } from "./types/store.ts";
import TurboDashboard from "./pages/TurboDashboard.tsx";
import CoinStats from "./pages/CoinStats.tsx";
import Squad from "./pages/Squad.tsx";
import SquadDetail from "./pages/SquadDetail.tsx";
import JoinSquad from "./pages/JoinSquad.tsx";
import { Toaster } from "sonner";
import Banned from "./pages/Banned.tsx";
import TopFren from "./pages/topFren.tsx";
import DragonWar from "./pages/dragon-war/DragonWar.tsx";
import Round1 from "./pages/dragon-war/Round1.tsx";
import Round3 from "./pages/dragon-war/Round3.tsx";
import Round4 from "./pages/dragon-war/Round4.tsx";
import Round5 from "./pages/dragon-war/Round5.tsx";
import Empty from "./pages/dragon-war/Empty.tsx";
import History from "./pages/dragon-war/History.tsx";
import End from "./pages/dragon-war/End.tsx";
import Scores from "./pages/Scores.tsx";
import Waiting from "./pages/dragon-war/Waiting.tsx";

function App() {
  const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
  const router = createBrowserRouter([
    {
      path: "/banned",
      element: <Banned />,
    },
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Enter />,
        },
        {
          path: "apps",
          element: <Apps />,
        },
        {
          path: "dashboard",
          element: turbo.turboMode ? <TurboDashboard /> : <Dashboard />,
        },
        {
          path: "boosts",
          element: <Boosts />,
        },
        {
          path: "league",
          element: <League />,
        },
        {
          path: "fren",
          element: <Fren />,
        },
        {
          path: "stats",
          element: <CoinStats />,
        },
        {
          path: "squad",
          element: <Squad />,
        },
        {
          path: "squad-detail/:id",
          element: <SquadDetail />,
        },
        {
          path: "join-squad/:id",
          element: <JoinSquad />,
        },
        {
          path: "/top-fren",
          element: <TopFren />,
        },
        {
          path: "/dragon-war/main",
          element: <DragonWar />,
        },
        {
          path: "/dragon-war/round1",
          element: <Round1 />,
        },
        {
          path: "/dragon-war/round3",
          element: <Round3 />,
        },
        {
          path: "/dragon-war/round4",
          element: <Round4 />,
        },
        {
          path: "/dragon-war/round5",
          element: <Round5 />,
        },
        {
          path: "/dragon-war/empty",
          element: <Empty />,
        },
        {
          path: "/dragon-war/history",
          element: <History />,
        },
        {
          path: "/dragon-war/end",
          element: <End />,
        },
        {
          path: "/dragon-war/scores",
          element: <Scores />,
        },
        {
          path: "/dragon-war/wait",
          element: <Waiting />,
        },
        {
          path: "*",
          element: turbo.turboMode ? <TurboDashboard /> : <Dashboard />,
        },
      ],
    },
  ]);
  // if (WebApp.platform !== 'ios' && WebApp.platform !== 'android')
  //     return (
  //         <div id='noDesktop'>
  //             <span>Desktop is Boring</span>
  //             <span>open on phone</span>
  //         </div>
  //     )
  // else
  return (
    <div className="App">
      <div>
        <Toaster
          theme="dark"
          position="bottom-center"
          expand={false}
          visibleToasts={1}
          duration={2500}
          className="dragon-toast"
        />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
