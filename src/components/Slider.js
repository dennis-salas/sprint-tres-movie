import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/HzHK0n6/covers.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/8j1Rhvr/covers-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block img-baner"
                        src="https://i.ibb.co/HzHK0n6/covers.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
