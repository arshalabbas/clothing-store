const Hero = () => {
  return (
    <section className="flex h-auto max-h-[500px] w-full gap-1">
      <div className="group relative h-[500px] flex-[2] cursor-pointer overflow-hidden">
        <img
          src="/Hero-lg.jpg"
          alt="Hero-lg banner image"
          className="h-full w-full object-cover object-top transition-all group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-full flex-col items-end gap-3 bg-gradient-to-t from-black to-transparent p-5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <h1 className="font-noto text-right text-3xl font-bold text-primary-content">
            Elegance Redefined
          </h1>
          <p className="font-noto w-1/2 text-right text-white/80">
            Discover timeless style crafted for everyone. Experience the
            ultimate in luxury with our exclusive unisex collection.
          </p>
        </div>
      </div>
      <div className="flex flex-1 cursor-pointer flex-col gap-1">
        <div className="group relative h-1/2 flex-1 overflow-hidden bg-red-400">
          <img
            src="/Hero-sm1.jpg"
            className="h-full w-full object-cover group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 flex translate-y-full flex-col items-end gap-3 bg-gradient-to-t from-black to-transparent p-5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <h1 className="font-noto text-right text-xl font-bold text-primary-content">
              Tailored Perfection
            </h1>
            <p className="font-noto w-full text-right text-white/80">
              Custom fits that suit everyone.
            </p>
          </div>
        </div>
        <div className="group relative h-1/2 flex-1 cursor-pointer overflow-hidden bg-orange-300">
          <img
            src="/Hero-sm2.jpg"
            className="h-full w-full object-cover object-center group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 flex translate-y-full flex-col items-end gap-3 bg-gradient-to-t from-black to-transparent p-5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <h1 className="font-noto text-right text-xl font-bold text-primary-content">
              Sustainable Luxury
            </h1>
            <p className="font-noto w-full text-right text-white/80">
              Eco-conscious fashion crafted for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
