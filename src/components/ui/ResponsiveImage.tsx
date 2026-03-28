interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function ResponsiveImage({ src, alt, className, loading = 'lazy' }: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      srcSet={`${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}