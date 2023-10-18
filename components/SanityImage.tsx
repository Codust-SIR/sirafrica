import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getSanityImageConfig } from "../libs/sanity.client";

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props;
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset);

  //   if (!imageProps) return null;

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt}
        style={{ width: "100%", height: "100%" }}
      />
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
