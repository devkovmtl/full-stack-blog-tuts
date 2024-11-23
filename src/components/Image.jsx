import { IKImage } from 'imagekitio-react';

const Image = ({ src, className, alt, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      loading={'lazy'}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      className={className}
    />
  );
};

export default Image;
