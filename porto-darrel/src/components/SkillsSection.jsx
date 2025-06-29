import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  { name: "Excel", logo: "/logos/excel.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Jira", logo: "/logos/Jira.png" },
  { name: "MySQL", logo: "/logos/MySQL.png" },
  { name: "PostgreSQL", logo: "/logos/postgre.png" },
  { name: "Power BI", logo: "/logos/powerBI.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Vue", logo: "/logos/Vue.png" },
  { name: "Figma", logo: "/logos/Figma.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "DrawIo", logo: "/logos/drawio.png" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-2"
                />
                <span className="text-sm text-muted-foreground">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
