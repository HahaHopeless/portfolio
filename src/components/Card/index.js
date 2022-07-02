import "./styles.css";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Lottie from "react-lottie";
import WarningAnimation from "../../assets/animations/warning.json";
import GradientButton from "../GradientButton";
import { Modal } from "react-bootstrap";

const Card = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: WarningAnimation,
  };

  return (
    <>
      {console.log("__ BG Image: ", props.bgImage)}
      <div
        className='card container js-tilt'
        style={{
          backgroundImage: `url(${require("../../assets/images/" +
            props.bgImage)})`,
        }}
      >
        <h1 className='cardTitle card-header card-text'>{props.title}</h1>
        <div class='card-body'></div>
        <div
          className='card-footer'
          onClick={() =>
            !props.adult
              ? window.open(`${props.goToUrl}`, "_blank")
              : setIsModalVisible(true)
          }
        >
          <h3 className='card-footer-text card-text'>
            <FormattedMessage id='visitWebsite' />
          </h3>
        </div>
        {props.adult && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "#ff6348",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              18+ <br />
              <span
                style={{ fontSize: "10px", color: "white", fontWeight: 400 }}
              >
                {" "}
                Adults only
              </span>
            </span>
          </div>
        )}
      </div>

      <Modal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Lottie
              options={defaultOptions}
              height={100}
              width={200}
              isStopped={false}
              style={{
                marginLeft: "-1vw",
              }}
            />
            <span>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#ff6348",
                }}
              >
                <FormattedMessage id='ageRestriction' />
              </span>
              <br />
              <span>
                <FormattedMessage id='ageRestriction.desc' />
              </span>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GradientButton
            text='I am 18+'
            onClick={() => {
              setIsModalVisible(false);
              window.open(`${props.goToUrl}`, "_blank");
            }}
            color='red'
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
