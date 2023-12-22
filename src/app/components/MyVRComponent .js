"use client";
// MyVRComponent.js
import React, { useEffect } from "react";

import Image from "next/image";
import "aframe";
const MyVRComponent = () => {
  return (
    <>
      {/* Next.js Image Component */}

      <div style={{ width: "100%" }}>
        <a-scene style={{ width: "100%", height: "100%" }}>
          <a-sky src="/img2.jpg" rotation="0 -130 0"></a-sky>

          <div style={{ width: "100%", height: "100%" }}>
            <Image alt="img" src="/img2.jpg" layout="fill" objectFit="cover" />
          </div>
        </a-scene>
      </div>
    </>
  );
};

export default MyVRComponent;
