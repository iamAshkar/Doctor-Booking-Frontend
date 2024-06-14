import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';




function DocDetials() {
    const { id } = useParams()
    console.log(id);

    const base_url = 'https://docter-booking-backend.onrender.com/doctors'

    const [viewDocData, setDocData] = useState({})

    const viewDetails = async () => {
        const response = await axios.get(`${base_url}/${id}`)
        console.log(response.data);
        setDocData(response.data);
    }
    console.log(viewDocData);
    useEffect(() => {
        viewDetails()
    }, [])
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title fw-bold mb-4 text-info">{viewDocData.hospital}</h2>
                    <h4 className="card-text">{viewDocData.name}</h4>
                    <p className="card-text">{viewDocData.phone}</p>
                    <hr className="my-4" />
                    <p className="card-text">{viewDocData.location}</p>
                    <p className="card-text">{viewDocData.available_hours}</p>
                    <p className="card-text">{viewDocData.email}</p>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="card-text">Available days:</h6>
                            <div className="card-text">
                                <p>{viewDocData.available_days}</p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <hr className="my-4" />
                    <h5 className="card-text">Reviews:</h5>
                    <div className="card-text">
                        <div className="d-flex">
                            <h6 className="w-75">{viewDocData.patient_name} </h6>
                            <p><i className="fa-solid text-warning fa-star"></i> 5</p>
                        </div>
                        <p>-Dr. Williams is amazing with kids. She's patient, kind, and always puts my child at ease during appointments.</p>
                        <hr className="my-4" />
                        <div className="d-flex">
                            <h6 className="w-75">Michael Brown on (September 22, 2023)</h6>
                            <p><i className="fa-solid text-warning fa-star"></i> 4.8</p>
                        </div>
                        <p>-I highly recommend Dr. Williams. She's a caring and knowledgeable pediatrician who genuinely cares about her young patients.</p>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocDetials
