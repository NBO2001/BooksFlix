import Slider from "react-slick";

const SimpleSlider = ({ children }) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
            breakpoint: 840,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
        },
        {
          breakpoint: 620,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 414,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "75px",
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "56px",
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
  };

  return (

        <Slider {...settings}>
            {children}
        </Slider>
  );
}

export default SimpleSlider;