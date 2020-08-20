import React from "react";
import { useRoutes } from "react-router-dom";
import Footer from "../components/Footer";

// Views
import Landing from "./Landing";
import Leaderboard from "./Leaderboard";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/leaderboard", element: <Leaderboard /> },
];

export default function App() {
    const element = useRoutes(routes);
    let year = new Date();
    year = year.getFullYear();

    return (
        <div className="p-2 flex flex-col min-h-screen">
            {element}
            <Footer content={`this is the footer, this is the ${year}`} />
        </div>
    );
}