import React from 'react';

const Overview = () => {
  return (
    <>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' style={{  justifyContent: 'center', marginTop: '100px' }}>
      <iframe
        width="360"
        height="315"
        src="https://www.youtube.com/embed/35npVaFGHMY?si=p8En_zTZGBTtFFTF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: '5px' }}
      ></iframe>

      <iframe
        width="360"
        height="315"
        src="https://www.youtube.com/embed/bOwUYE6DE58?si=VaC3FZhRX3yY9iiz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: '5px' }}
      ></iframe>

      <iframe
        width="360"
        height="315"
        src="https://www.youtube.com/embed/yyHRr-Seac8?si=XSve8VgDqkW9b2y5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: '5px' }}
      ></iframe>

     
    </div>
    </>
  );
};

export default Overview;
