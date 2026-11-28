"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";

type FallbackImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc: string;
};

export default function FallbackImage({
  src,
  fallbackSrc,
  alt,
  onError,
  ...props
}: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(e);
      }}
    />
  );
}
