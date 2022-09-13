import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ExploreSnapshotsPage from "./pages/ExploreSnapshotsPage";
import SnapshotPage from "./pages/SnapshotPage";
import NoPage from "./pages/NoPage";

import './App.css';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="explore" element={<ExploreSnapshotsPage />} />
            <Route path="snapshot" element={<SnapshotPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
