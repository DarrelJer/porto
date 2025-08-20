import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-primary/20 p-1">
              <img
                src="/apaini.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Darrel
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jeremiah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            People says 
            <span className="text-primary"> (Not me)</span> I'm funny, creative, easy to talk to, passionate, and dedicated to my work 
            and that's how I feel about Data. With a goal to <span className="text-primary">  utilize business processes</span>, I build
            <span className="text-primary"> impactful solutions</span> that
            transform data into actionable insights. Let's work something
            amazing together!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
