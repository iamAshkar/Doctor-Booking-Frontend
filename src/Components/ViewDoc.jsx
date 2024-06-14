import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ViewDoc({ docArray }) {
  console.log(docArray);
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2021/10/03/03/47/doctor-6676747_1280.jpg" className="d-block w-100" alt="Carousel Image 1" style={{ height: '400px' }} />
            <div className="carousel-caption d-md-block">
              <h1 className='text-dark'><b>Book Your Doctor Appointment Now!</b></h1>
              <p className='text-dark'><b>Convenient, efficient, and hassle-free.</b></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container about p-3 mt-5  mx-auto rounded-5 shadow " style={{ backgroundColor: '#00FFFF' }}>
        <h2 className="text-center my-4">About </h2>
        <p>At Doctor Booking, our mission is to revolutionize the way people access healthcare by making doctor
          appointments convenient, efficient, and hassle-free. We understand that finding the right doctor and booking
          an appointment can sometimes be a daunting task, and we're here to simplify that process for you.</p>
        <h4>Our Vision</h4>
        <p>We envision a future where everyone has easy access to quality healthcare services. By leveraging technology,
          we aim to bridge the gap between patients and healthcare providers, ensuring that everyone receives the care
          they need when they need it.</p>
        <h4>What We Offer</h4>
        <ul>
          <li><strong style={{ fontSize: '19px', fontWeight: 'bolder' }}>Comprehensive Doctor Database :</strong> We
            've
            curated a vast database of qualified doctors across various specialties and locations, making it easy for
            you to find the right healthcare professional for your needs.</li>
          <li><strong style={{ fontSize: '19px', fontWeight: 'bolder' }}>User-Friendly Booking Platform :</strong> Our
            intuitive booking platform allows you to schedule appointments with just a few clicks. Say goodbye to long
            wait times and phone calls - with DoctorBookingHub, booking appointments is quick and effortless.</li>
          <li><strong style={{ fontSize: '19px', fontWeight: 'bolder' }}>Transparent Reviews and Ratings :</strong> We
            believe in transparency and trust, which is why we provide genuine patient reviews and ratings for each
            doctor. Make informed decisions about your healthcare provider based on real experiences from other
            patients.</li>
        </ul>
        <h4>Our Commitment</h4>
        <ul>
          <li><strong style={{ fontSize: '18px', fontWeight: 'bolder' }}>Quality Care :</strong> We're committed to
            connecting you with reputable healthcare professionals who prioritize your well-being and provide
            high-quality care.</li>
          <li><strong style={{ fontSize: '18px', fontWeight: 'bolder' }}>Accessibility :</strong> Whether you're at home,
            at
            work, or on the go, DoctorBookingHub is accessible from any device, allowing you to book appointments
            whenever it's convenient for you.</li>
          <li><strong style={{ fontSize: '18px', fontWeight: 'bolder' }}>Privacy and Security :</strong> Your privacy is
            important to us. Rest assured that your personal information is kept secure and confidential at all times.
          </li>
        </ul>
      </div>
      <div className="row mt-3 ">
        <h1 className='t text-primary px-5'><b>Find Doctor</b></h1>
        {
          docArray.map(item => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center mt-3 ">


              <Card style={{ width: '28rem' }}>

                <Card.Body>
                  <Card.Header style={{ backgroundColor: '#F0FFFF' }} className='fs-4'>{item.hospital}</Card.Header>

                  <Card.Text>
                    <b>                                            {item.name}
                      {item.name}
                    </b>
                  </Card.Text>

                  <Card.Text>
                    {item.address}
                  </Card.Text>
                  <Link to={`/view/${item.id}`}>

                    <Button variant="primary">Book An Appoinment</Button>
                  </Link>

                </Card.Body>
              </Card>

            </div>
          ))
        }
      </div>
    </div >
  )
}

export default ViewDoc
