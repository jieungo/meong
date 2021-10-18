import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const PostImages = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };

    return (
        <Slider {...settings}>
            {images.map((img) => (
                    <div key={img.src}>
                        <img 
                            src={img.src} 
                            alt={img.src} 
                            style={{maxWidth:'400px', height:'250px'}}
                            role='presentaiton'/>
                    </div>
            ))}
        </Slider>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;