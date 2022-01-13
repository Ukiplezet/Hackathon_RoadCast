import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Toast } from "react-bootstrap";
import "../Layout/MainContainer.css";
import { UserContext } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Login from "./Login";
import SearchForm from "../Components/MainContent/SearchForm";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import RowPost from "../Components/NetFlixSlider/RowPost";
import { originals } from "../Components/constants/urls";
import api from "../Utils/API";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner";
import Welcome from "../Components/Welcome";
const Home = () => {
  const { user, setUser, logout } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [resultsSliderOpen, setResultSliderOpen] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [show, toggleShow] = useState(false);

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
  const showSearchFormHandler = () => {
    if (!showSearchForm) {
      setShowSearchForm(true);
    } else {
      setShowSearchForm(false);
      setShowLoadingSpinner(true);
    }
  };
  const displaySearchResultsHandler = () => {
    setTimeout(() => {
      setShowLoadingSpinner(false);
      setResultSliderOpen(true);
    }, 3000);
  };

  useEffect(() => {
    try {
      async function getUserData() {
        const userId = localStorage.getItem("id");
        await getUpdatedUserData(userId);
        setLocalStorage();
      }
      getUserData();
    } catch (err) {
      return err.message;
    }
  }, []);

  if (user.auth) {
    return (
      <Col
        className="center-content shadow-lg pt-2 text-white "
        xs={10}
        md={8}
        lg={7}
      >
        <OnHoverScrollContainer>
          {showSearchForm ? (
            <>
              {" "}
              <h2>Let's find some podcasts.</h2>
              <SearchForm
                showSearchFormHandler={showSearchFormHandler}
                displaySearchResultsHandler={displaySearchResultsHandler}
              />
            </>
          ) : (
            <></>
          )}
          {showLoadingSpinner ? (
            <div className="d-flex justify-content-center mt-5">
              <Puff
                type="Puff"
                color="rgba(7, 190, 68, 0.733)"
                height={200}
                width={200}
              />
            </div>
          ) : (
            <></>
          )}
          {resultsSliderOpen ? (
            <Col>
              <div className="pt-4">
                <RowPost
                  className="my-5 pb-5"
                  title="Here are your podcasts of interest:"
                  isSmall={false}
                  api={originals}
                  toggleShow={toggleShow}
                  setShowLoadingSpinner={setShowLoadingSpinner}
                  displaySearchResultsHandler={displaySearchResultsHandler}
                  setResultSliderOpen={setResultSliderOpen}
                />
                <Button
                  variant="success"
                  onClick={(e) => {
                    showSearchFormHandler();
                    setResultSliderOpen(false);
                  }}
                >
                  Back To Search
                </Button>
              </div>
              <Toast
                show={show}
                onClose={() => toggleShow(false)}
                className="mt-5  d-inline-block justify-content-center"
              >
                <Toast.Header>
                  <strong className="fs-5 mr-auto mx-5 px-4">Saved!</strong>
                </Toast.Header>
                <Toast.Body className="text-success fs-6">
                  Podcast was saved for later
                </Toast.Body>
              </Toast>
            </Col>
          ) : (
            <></>
          )}
        </OnHoverScrollContainer>
      </Col>
    );
  } else {
    return (
      <Col
        className="center-content shadow-lg text-white d-flex justify-content-center"
        xs={12}
        md={12}
        lg={12}
      >
        <Col>
          <Welcome />
          <h2> A novel commute to work</h2>
          <h3>Find podcasts that suit your length of commute</h3>
          <h3>Please login to start your trip</h3>
          <iframe
            src="https://giphy.com/embed/xUA7aQfR9hhgU78KDC"
            width="700"
            height="440"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <Login modalOpen={modalOpen} handleModalOpen={openModalHandler} />
        </Col>
      </Col>
    );
  }
};

export default Home;
