import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="container mx-auto px-4 text-center relative">
        <div className="animate-float">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent" style={{lineHeight: '1.2'}}>
            Chingis Toktamyssov
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I'm an 18 year old computer engineering undergrad at University of Ottawa. I'm particularly interested in electronics.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              LeetCode Profile
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg text-muted-foreground">
              <span>[Your Phone Number]</span>
              <span>[Your Email Address]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;