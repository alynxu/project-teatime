import React from "react";
import styled from "styled-components";
import {
  BsTelephoneFill,
  BsFillShareFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { HiMailOpen, HiLocationMarker } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin: 20px 0;
`;

const MapContainer = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 16px 0;
  color: #000958;
  font-size: 20px;
  h5 {
    margin: 0;
    color: #000958;
  }
`;

const IconCtn = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
`;

const Para = styled.p`
  color: #000958;
  font-size: 16px;
  margin: 2px 0;
`;

const Contact = () => {
  return (
    <Container>
      <Card>
        <h2 style={{ color: "#000958" }}>Contact Information</h2>
        <ContentContainer>
          <div>
            <IconText>
              <BsTelephoneFill />
              <span style ={{fontWeight: 'bold'}}>Phone</span>
            </IconText>
            <Para>+604 789 303</Para>
            <Para>+604 987 654</Para>
          </div>
          <div>
            <IconText>
              <HiMailOpen />
              <span style ={{fontWeight: 'bold'}}>Email</span>
            </IconText>
            <Para>example@gmail.com</Para>
          </div>
          <div>
            <IconText>
              <HiLocationMarker />
              <span style ={{fontWeight: 'bold'}}>Address</span>
            </IconText>
            <Para>4700 Kingsway, Burnaby,</Para>
            <Para>V5H 4M5, BC</Para>
          </div>
          <div>
            <IconText>
              <BsFillShareFill />
              <span style ={{fontWeight: 'bold'}}>Social</span>
            </IconText>
            <IconCtn>
              <BsInstagram />
              <BsTwitter />
            </IconCtn>
          </div>
        </ContentContainer>
      </Card>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6367608308014!2d-123.0005262!3d49.226415499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486765945185ec5%3A0xd7e975366bfd47f3!2s4700%20Kingsway%2C%20Burnaby%2C%20BC%20V5H%204M5%2C%20Canada!5e0!3m2!1sen!2s!4v1670300755222!5m2!1sen!2s"
          allowfullscreen=""
          title="map"
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </Container>
  );
};

export default Contact;
