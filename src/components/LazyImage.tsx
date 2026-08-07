type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
};

const LazyImage = ({ src, alt, className, style, width, height, priority = false }: LazyImageProps) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={style}
    width={width}
    height={height}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={priority ? "high" : "auto"}
  />
);

export default LazyImage;
