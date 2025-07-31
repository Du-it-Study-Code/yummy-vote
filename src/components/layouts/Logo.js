// 요약: 임시 로고 이미지, 폰트는 Sandoll 토토리, 컬러값 #ee8657
import React from "react";

export default function Logo({ width = 180, height = "auto", className = "" }) {
  return (
    <img
      src="/images/logo.png"
      alt="YUMMY VOTE"
      width={width}
      height={height}
      className={className}
    />
  );
}
