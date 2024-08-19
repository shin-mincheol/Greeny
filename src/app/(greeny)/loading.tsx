'use client';
import Lottie from 'react-lottie-player';
import lottieJson from '@loading/loading.json';

function Loading() {
  return (
    <div className="loadingBox">
      <div className="loading">
        <Lottie loop play animationData={lottieJson} style={{ width: 200, height: 200 }} />
      </div>
    </div>
  );
}

export default Loading;
