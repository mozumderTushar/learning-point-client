import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import './Details.css'

function MyVerticallyCenteredModal(props) {
  const handlePayment = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetch('http://localhost:2000/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }
  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          STRIPE PAYMENT GATEWAY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <Button variant="success" className="btn" onClick={ handlePayment }>PAYMENT</Button>{ ' ' }
      </Modal.Body>
      {/* <Modal.Footer>
      <Button variant="success" className="btn" onClick={ props.onHide }>CLOSE</Button>{ ' ' }
      </Modal.Footer> */}
    </Modal>
  );
}

const Details = () => {
  const { teacherId } = useParams();
  const [info, setInfo] = useState({})
  const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(res => res.json())
      .then(data => {
        console.log(data.teachers);
        const details = data.teachers.find(data => data._id === teacherId)
        setInfo(details)
      })
  }, [])

  return (
    <div className="about">
      <div className="container">
        <div className="row  h-650 alignCenter" >
          <div className="col-md-6">
            <div className="about__img">
              <img src={ info.profilePicture } alt="man" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I'm <strong>{ info.firstName } { info.lastName }</strong> a high skilled teacher with experience in { info.subject } . Proficient in { info.subject }, has professional experience working with student, also skilled in Math, English...
                <br /><br />
                I'm highly passionate about teaching, helping students : <br />
                - Preferred Subject:  { info.subject }
              </div>
              <div className="about__info-p2">

              </div>
              <div className="info__contacts">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>NAME: </strong>
                      <p>{ info.firstName } { info.lastName }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>Email: </strong>
                      <p>{ info.email } </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>PHONE: </strong>
                      <p>{ info.contact }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>Email: </strong>
                      <p>{ info.email } </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>SUBJECT: </strong>
                      <p>{ info.subject }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>CHARGE PER LECTURE: </strong>
                      <p>{ info.charge } BDT</p>
                    </div>
                  </div>
                </div>
                <Button variant="success" className="btn" onClick={ () => setModalShow(true) }>RESERVE A SET</Button>{ ' ' }
                <MyVerticallyCenteredModal
                  show={ modalShow }
                  onHide={ () => setModalShow(false) }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Details;

