import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import RegisterPage from "./pages/RegisterPage";
import { connect } from "react-redux";

function App({ accessToken }) {
  const token = localStorage.getItem("token");

  return (
    <>
      {accessToken || token ? (
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/contacts" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.authReducer.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
