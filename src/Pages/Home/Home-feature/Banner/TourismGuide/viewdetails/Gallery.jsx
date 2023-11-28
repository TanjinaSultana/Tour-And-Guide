/* eslint-disable react/prop-types */
import React from 'react';
import SectionTitle from '../../../../../../components/sectionTitle/SectionTitle';
import { useSpring, animated } from '@react-spring/web';

const Gallery = ({ gallery }) => {
 
  
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div style={{ marginTop: '40px' }}>
      <SectionTitle heading={'Gallery Section'} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <animated.div style={{ ...props, width: '300px', height: '300px', display: 'flex', gap: '40px' }}>
          <img src={gallery.gallery1} style={{ width: '400px', height: '400px', borderTopLeftRadius: '50px', borderBottomRightRadius: '50px' }} alt="Gallery 1" />
        </animated.div>
        <animated.div style={{ ...props, width: '300px', height: '300px', marginTop: '200px' }}>
          <img src={gallery.gallery2} style={{ width: '400px', height: '400px', borderTopLeftRadius: '50px', borderBottomRightRadius: '50px' }} alt="Gallery 2" />
        </animated.div>
        <animated.div style={{ ...props, width: '300px', height: '300px', display: 'flex', gap: '40px' }}>
          <img src={gallery.gallery3} style={{ width: '400px', height: '400px', borderTopLeftRadius: '50px', borderBottomRightRadius: '50px' }} alt="Gallery 3" />
        </animated.div>
      </div>
    </div>
  );
};

export default Gallery;
