import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SideNavBar from "./components/main-componentts/SideNavBar";
import FieldList from "./scenes/FieldList/FieldList";
import FieldGroups from "./scenes/field-groups/FieldGroups";
import Models from "./scenes/Models/Models";
import EditModel from "./scenes/Models/EditModel";
import ModelRelations from "./scenes/Models/ModelRelations";
import FormList from "./scenes/Forms/FormList";

function App() {
  return (
    <div className="relative h-[100vh] flex-row">
      <SideNavBar />
      <div className="ml-[81px] flex-1 h-full">
        <Routes>
          <Route path="/" element={<FieldList />} />
          <Route path="/groups" element={<FieldGroups />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/edit" element={<EditModel />} />
          <Route path="/models/relations" element={<ModelRelations />} />
          <Route path="/forms" element={<FormList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
