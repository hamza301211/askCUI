import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  return (
    <MDBCarousel
      showIndicators
      showControls
      class="carousel slide carousel-fade "
      data-mdb-interval="1"
      style={{marginRight:"10px"}}
    >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://lahore.comsats.edu.pk/Research/images/slider/1-212-8585960906652650201.jpg"
        alt="..."
      >
        <h5>COMSATS University Islamabad, Lahore Campus</h5>
        <p>COMSATS University Islamabad is a public sector university.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://lahore.comsats.edu.pk/diceiet2017/images/slides/3.jpg"
        alt="..."
      >
        <h5>COMSATS University Islamabad, Lahore Campus</h5>
        <p>
          It was awarded the status of a degree awarding institute (DAI) by the
          federal government of Pakistan in August 2000..
        </p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://lahore.comsats.edu.pk/diceiet2017/images/slides/2.jpg"
        alt="..."
      >
        <h5>COMSATS Lahore Location</h5>
        <p>
          1.5 KM Defence Rd، off Raiwand Road, Lda Avenue Phase 1 Lda Avenue,
          Lahore, Punjab 54000.
        </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://lahore.comsats.edu.pk/diceiet2017/images/slides/2.jpg"
        alt="..."
      >
        <h5>COMSATS Lahore Location</h5>
        <p>
          1.5 KM Defence Rd، off Raiwand Road, Lda Avenue Phase 1 Lda Avenue,
          Lahore, Punjab 54000.
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
