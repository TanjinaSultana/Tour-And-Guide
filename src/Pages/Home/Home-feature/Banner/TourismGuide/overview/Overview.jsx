import React from 'react';
import YouTube from 'react-youtube';

const Overview= () => {
  // Replace 'your-youtube-video-id' with the actual YouTube video ID
 
  // Options for the YouTube player (you can customize these as needed)
// //   const opts = {
// //     height: '360',
// //     width: '640',
// //     playerVars: {
// //       // https://developers.google.com/youtube/player_parameters
// //       autoplay: 0, // Set to 1 for autoplay
// //     },
//   };

  return (
    <div style={{display:"flex",gap:"50px",marginTop:"100px"}}>
     
      <iframe width="360" height="315" src="https://www.youtube.com/embed/35npVaFGHMY?si=p8En_zTZGBTtFFTF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{borderRadius:"5px"}}></iframe>
   
    <iframe width="360" height="315" src="https://www.youtube.com/embed/bOwUYE6DE58?si=VaC3FZhRX3yY9iiz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{borderRadius:"5px"}}></iframe>
    <iframe width="360" height="315" src="https://www.youtube.com/embed/yyHRr-Seac8?si=XSve8VgDqkW9b2y5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{borderRadius:"5px"}}></iframe>
   
     </div>
  );
};

export default Overview;
