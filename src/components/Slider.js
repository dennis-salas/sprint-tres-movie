import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/6D6Mzj7/mulan.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/XSRbxB2/raya.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/Cvw7qPX/unidos.png"
                        alt="one slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
