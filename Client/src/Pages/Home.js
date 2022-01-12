import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../Layout/MainContainer.css";
import { UserContext } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Login from "./Login";
import SearchForm from "../Components/MainContent/SearchForm";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import RowPost from "../Components/NetFlixSlider/RowPost";
import { originals } from "../Components/constants/urls";
import api from "../Utils/API";

const Home = () => {
  const { user, setUser, logout } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const history = useHistory();
  const date = new Date();
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

  const setLocalStorage = () => {
    const hours = 1;
    const now = new Date().getTime();
    const setupTime = localStorage.getItem("setupTime");
    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        logout(user);
        localStorage.setItem("setupTime", now);
        history.push("/");
      }
    }
  };
  // useEffect(() => {
  //   try {
  //     async function getUserData() {
  //       const userId = localStorage.getItem("id");
  //       await getUpdatedUserData(userId);
  //       setLocalStorage();
  //     }
  //     getUserData();
  //   } catch (err) {
  //     return err.message;
  //   }
  // }, []);

  if (user.auth) {
    return (
      <Col
        className="center-content shadow-lg pt-2 text-white "
        xs={10}
        md={8}
        lg={7}
      >
        <OnHoverScrollContainer>
          <h1>Let's find some podcasts.</h1>
          <SearchForm />
          <RowPost
            className="mb-5 pb-5"
            title="Here are your podcasts of interes:"
            isSmall={false}
            api={originals}
          />
        </OnHoverScrollContainer>
      </Col>
    );
  } else {
    return (
      <Row
        className="center-content shadow-lg pt-2 text-white d-flex justify-content-center"
        xs={12}
        md={12}
        lg={12}
      >
        <h1>RoadCast,</h1>
        <h2> A novel commute to work</h2>
        <h3>Find podcasts that suit your length of commute</h3>
        <h3>Please login to plan your trip</h3>
        <Col className="d-flex justify-content-center">
          <iframe
            src="https://giphy.com/embed/2DMWjDy699m0jdCYig"
            width="700"
            height="250"
            frameBorder="0"
            //   class="giphy-embed"
            //   allowFullScreen
          ></iframe>
          {/* <Button
            className="w-25 mt-3"
            onClick={(e) => {
              e.preventDefault();
              openModalHandler();
            }}
          >
            Login
          </Button> */}
        </Col>
        <Login modalOpen={modalOpen} handleModalOpen={openModalHandler} />
      </Row>
    );
  }
};

export default Home;
