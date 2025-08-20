import { useState } from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const entries = [
  {
    id: 1,
    title: "Computer Science League Fasilkom UI",
    category: "organization",
    thumbnail: "/gallery/thumbnailCSL.MP4",
    gallery: ["/gallery/CSL1.jpg", "/gallery/CSL2.JPG", "/gallery/CSL 3.jpg", "/gallery/CSL4.jpg"],
    description: "Test",
    caption:
      "Lorem Ipsumm",
  },
  {
    id: 2,
    title: "BEM Fasilkom UI",
    category: "organization",
    thumbnail: "/gallery/hima-thumb.jpg",
    gallery: ["/gallery/hima1.jpg", "/gallery/hima2.jpg"],
    description: "Aktif di divisi media dan publikasi.",
    caption:
      "Sebagai bagian dari tim publikasi, saya membuat poster kegiatan, dokumentasi event, dan mengelola sosial media organisasi.",
  },
];

const categories = ["all", "organization", "life", "sports", "music"];

export const LifeSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeEntry, setActiveEntry] = useState(null);

  const filteredEntries =
    activeCategory === "all"
      ? entries
      : entries.filter((entry) => entry.category === activeCategory);

  return (
    <section id="life" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Life & Interests
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              onClick={() => setActiveEntry(entry)}
              className="cursor-pointer bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              {entry.thumbnail.endsWith(".mp4") ? (
                <video
                    src={entry.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-md mb-4 w-full h-48 object-cover"
                />
                ) : (
                <img
                    src={entry.thumbnail}
                    alt={entry.title}
                    className="rounded-md mb-4 w-full h-48 object-cover"
                />
                )}
              <h3 className="font-semibold text-lg">{entry.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {activeEntry && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-8 relative">
            <button
              onClick={() => setActiveEntry(null)}
              className="absolute top-3 right-4 text-muted-foreground hover:text-primary text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{activeEntry.title}</h3>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-lg mb-4"
            >
              {activeEntry.gallery.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`gallery-${i}`}
                    className="w-full h-[50vh] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {activeEntry.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
