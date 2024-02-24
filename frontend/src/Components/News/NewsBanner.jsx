import React from "react";
import ReactPlayer from "react-player";

function NewsBanner() {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-overlay" />
        <ReactPlayer
          url="https://s3-figma-videos-production-sig.figma.com/video/1309623234516428457/TEAM/2158/e648/-1250-4054-b1f3-6cf60369b5c8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7MgzIZ1smyd8cMOSVYiipPdsz2djXOQaZoprTghftTtGLmZ5TbExnibVw8wwsiDuefDbxiRY7Vd~gqvmxa4MB6DLHj7~4HkxMh7io2agRm4Z4v4AmDQT9CVgFLTwBGZuaxYvShVGtBjXIZEsf~BauOzR3zbe7-DIWyEuqwGMvBRx-IHr-9gP6hqO-aYUa1X0JJ9yp3VOqrcCtmLMLx30hmQe9ZvzxRgc67D1h9RBE2Ef~ZofHyX3aG-bUEj58Eg4sVzKy0DpnDMHiT2G6dpwUPH~1mB4bxdMpVVgMRHLT8SqkrgOqo73Nlt2IpFWOvNz5OhH5qYQu39PhFUrad~~Q__"
          playing={true}
          playsinline
          loop={true}
          volume={0}
          controls={false}
          width="100%"
          height="599px"
          className="player"
        />
        <div className="banner-text2">
          <h1>Nyheter</h1>
          <p>
            Här uppdaterar vi regelbundet och publicerar välresearchade
            artiklar, tips för energibesparing och säkerhetsrekommendationer. Du
            hittar även nyheter om vad som händer hos oss med nya projekt och
            annan övrig information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsBanner;
