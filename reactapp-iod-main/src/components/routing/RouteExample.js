import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import ContextProviderExample from '../ContextProviderExample';
import Home from './Home';
import HookUseState from '../HookUseState';
import AppMenu from './AppMenu';
import NoPage from "./NoPage";
import LoginForm from './LoginForm';
import SuccessMessage from './SuccessMessage';
import FailureMessage from './SuccessMessage';
import MUIButton from '../MUI/MUIButton';
import SignIn from '../MUI/SignIn';
import MUICard from '../MUI/MUICard';

export default function RouteExample() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppMenu />}>
              <Route index element={<Home />} />
              <Route path="contextproviderexample" element={<ContextProviderExample />} />
              <Route path="hookusestate" element={<HookUseState />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="successmessage" element={<SuccessMessage />} />
              <Route path="failuremessage" element={<FailureMessage />} />

              <Route path="muibutton" element={<MUIButton />} />
              <Route path="muisignin" element={<SignIn />} />
              <Route path="muicard" element={<MUICard />} />
              

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
  
}
