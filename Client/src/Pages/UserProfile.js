import React, { useState, useContext, useEffect } from "react";
// import "../App.css";
import { Card, ListGroup, Col } from "react-bootstrap";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditUserModal from "../Components/users/EditUserModal";
import { UserContext } from "../Context/AuthContext";
import api from "../Utils/API";

export default function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [editUserModal, setEditUserModal] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const openEditUserModal = () => {
    if (!editUserModal) {
      setEditUserModal(true);
    } else {
      setEditUserModal(false);
    }
  };

  const getUpdatedUserData = async (userId) => {
    const response = await api.getUserById(userId);
    console.log(response);
    setUser(response);
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
    setPhoneNumber(response.phoneNumber);
    setBio(response.bio);
    setFirstRender(false);
  };

  useEffect(() => {
    if (firstRender) {
      const fetchUserData = () => {
        const userId = localStorage.getItem("id");
        getUpdatedUserData(userId);
        setFirstRender(false);
      };
      fetchUserData();
    }
  }, [firstRender]);
  return (
    <Col
      xs={10}
      md={8}
      lg={7}
      className="center-content d-flex justify-content-center shadow-lg pt-2 text-white"
    >
      <Card className="bg-dark" style={{ width: "650px", height: "470px" }}>
        <Card.Header className="justify-content-center ">
          <div className="d-flex flex-row justify-content-between">
            <div></div>
            <h2 className="ms-5 ps-3 text-center text-dark">Profile</h2>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ cursor: "pointer" }}
              onClick={() => openEditUserModal()}
              className="me-5 mt-2 text-light"
              size="lg"
            ></FontAwesomeIcon>
          </div>
        </Card.Header>
        <div className="d-flex flex-row justify-content-evenly align-items-center mt-1">
          <Card.Img
            className="mx-4 d-flex flex-row justify-content-start align-items-start rounded shadow-lg"
            style={{ width: "200px", height: "150px" }}
            variant="top"
            src="https://www.placecage.com/c/150/200 cap"
          />
          <Card.Title className="bg-grey text-dark ms-4 fs-3">
            <ListGroup className="bg-grey">
              <ListGroup.Item>
                {" "}
                <span className="pe-2">{user.firstName}</span>
                <span>{user.lastName}</span>
              </ListGroup.Item>
              <ListGroup.Item>{user.email}</ListGroup.Item>
              <ListGroup.Item>972-{user.phoneNumber}</ListGroup.Item>
            </ListGroup>
          </Card.Title>
        </div>
        <Card.Body>
          <Card.Text className="text-dark mb-0">
            <Card.Subtitle className="fs-5 text-muted pb-0">Bio:</Card.Subtitle>
            <p className="fs-5 text-light">{user.bio}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <EditUserModal
        setFirstRender={setFirstRender}
        editUserModal={editUserModal}
        handleModalEditUser={openEditUserModal}
      />
    </Col>
  );
}
