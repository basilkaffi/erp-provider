import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Form } from "react-bootstrap";

function Contact() {
  const MapContainer = () => {
    const mapStyles = {
      height: "50vh",
      width: "90%",
      "border-radius": "1vh",
    };
    const defaultCenter = {
      lat: -7.392769,
      lng: 109.255,
    };
    const position = {
      lat: -7.392769,
      lng: 109.244102,
    };
    return (
      <LoadScript googleMapsApiKey="AIzaSyDjCBpcpAOeE2oxMklcEilfyXbOdcF3-30">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="content-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Contact Information</h2>
            <p className="lead w-75 mx-auto">
              Don't hesitate to give us a call or send us a contact form message
            </p>
            <div className="lead divider">
              <p>
                <span>
                  <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                </span>{" "}
                Banyumas, Central Java, Indonesia
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                </span>{" "}
                +628XXXXXXXX
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </span>{" "}
                contact@our-erp.com
              </p>
            </div>
          </div>
        </div>
        <div className="divider-content">
          <div className="map">{MapContainer()}</div>
          <div className="form">
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Your Message"
                />
                <div className="button">Submit</div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
