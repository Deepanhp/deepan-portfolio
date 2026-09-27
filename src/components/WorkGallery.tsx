import { useState, MouseEvent } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Props {
  images: string[];
  alt: string;
  onImageClick: (image: string) => void;
}

const WorkGallery = ({ images, alt, onImageClick }: Props) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goPrev = (e: MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };

  const goNext = (e: MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };

  return (
    <div className="work-image-clickable work-gallery-carousel">
      <div className="work-image">
        <div
          className="work-image-in"
          onClick={() => onImageClick(images[index])}
        >
          <img src={images[index]} alt={`${alt} - photo ${index + 1}`} />
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            className="gallery-nav gallery-prev"
            onClick={goPrev}
            aria-label="Previous photo"
          >
            <MdArrowBackIos />
          </button>
          <button
            className="gallery-nav gallery-next"
            onClick={goNext}
            aria-label="Next photo"
          >
            <MdArrowForwardIos />
          </button>
          <div className="gallery-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`gallery-dot ${i === index ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WorkGallery;
