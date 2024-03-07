import React from "react";
import {Router} from "@/core/router";
import "./style.css";
import { ProfileProvider } from "@/core/profile";

export const App: React.FC = () => {
  return (
  <ProfileProvider>
    <Router/>
  </ProfileProvider>
  );
};
