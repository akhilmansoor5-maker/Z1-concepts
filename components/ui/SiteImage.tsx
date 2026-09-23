import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

type SiteImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SiteImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
}: SiteImageProps) {
  return (
    // Native img so GitHub Pages gets /Z1-concepts/... paths. next/image
    // leaves local src unprefixed when images.unoptimized is on.
    <img
      src={asset(src)}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
