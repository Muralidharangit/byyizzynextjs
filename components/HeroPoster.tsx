// components/HeroPoster.tsx
import Image from "next/image";

export default function HeroPoster({
  img,
  alt = "",
}: {
  img: string | import("next/image").StaticImageData;
  alt?: string;
}) {
  return (
    <section className="primary-color relative flex h-[500px] items-center py-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="hidden justify-center lg:flex lg:justify-end">
          <div className="relative h-[450px] w-full">
            <Image
              src={img}
              alt={alt}
              fill
              priority // ✅ preload only the first hero
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 80vw,
         50vw"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
