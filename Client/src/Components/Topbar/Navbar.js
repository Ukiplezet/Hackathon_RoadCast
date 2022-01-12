import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faSearch,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import "../../Layout/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../../Pages/Login";
import { UserContext } from "../../Context/AuthContext";
import api from "../../Utils/API";

function Navbar() {
  const history = useHistory();
  const { user, login, logout, setUser } = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const openModalHandler = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const getUpdatedUserData = async (userId) => {
    const token = localStorage.getItem("token");
    if (token) {
      userId = user._id;
      const response = await api.getUserById(userId);
      console.log(`1`, response);
      setUser(response);
      setFirstName(response.firstName);
      setLastName(response.lastName);
      history.push(`/${response._id}`);
    }
  };

  useEffect(() => {
    try {
      async function getUserData() {
        const userId = localStorage.getItem("id");
        await getUpdatedUserData(userId);
      }
      getUserData();
    } catch (err) {
      return err.message;
    }
  }, []);

  return (
    <div className="navbar shadow-lg d-flex flex-row justify-content-between">
      <div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          className="ms-4 mt-2 text-light"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ cursor: "pointer" }}
          className="ms-4 me-5 mt-2 text-light"
        ></FontAwesomeIcon>

        <img
          style={{ height: "40px" }}
          src="https://www.howtogeek.com/wp-content/uploads/2018/10/preview-12.png?width=1198&trim=1,1&bg-color=000&pad=1,1"
          alt="Logo"
          className="text-light"
        />
      </div>

      {user.auth ? (
        <>
          <div>
            <input className="rounded-pill me-2" style={{ width: "550px" }} />
            <FontAwesomeIcon
              icon={faSearch}
              style={{ cursor: "pointer" }}
              className="me-5 mt-2 text-light"
            ></FontAwesomeIcon>
          </div>
          <div className="d-flex flex-row ">
            <img
              className="rounded me-3 mt-2"
              src="https://www.placecage.com/30/30"
              style={{ height: "30px" }}
            />
            <span className="me-5 mt-2 pt-1 fs-6">
              {user.firstName} {user.lastName}
            </span>
            <div className="d-flex pt-1 flex-row">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                onClick={(e) => {
                  history.push("/");
                  logout();
                  localStorage.clear();
                }}
                style={{ cursor: "pointer" }}
                className="me-5 mt-2 text-light"
              ></FontAwesomeIcon>
            </div>
          </div>
        </>
      ) : (
        <div
          className="d-flex flex-rownowrap  "
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            openModalHandler();
          }}
        >
          <FontAwesomeIcon
            icon={faSignInAlt}
            className="me-5 mt-2 text-light"
          ></FontAwesomeIcon>
        </div>
      )}
      <Login modalOpen={modalOpen} handleModalOpen={openModalHandler} />
    </div>
  );
}

export default Navbar;
