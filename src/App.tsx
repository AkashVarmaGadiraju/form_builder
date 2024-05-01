import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import SideNavBar from "./components/main-componentts/SideNavBar";
import FieldList from "./components/main-componentts/FieldList";

function App() {
	return (
		<div className="relative h-[100vh] flex-row">
			<SideNavBar />
			<div className="ml-[81px] flex-1">
				<Routes>
					<Route path="/" element={<FieldList />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
