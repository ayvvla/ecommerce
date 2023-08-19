import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="grid place-content-center my-16">
      <div className="flex max-w-6xl items-center justify-center border about">
        <div>
          <Image
            src="/sola.jpeg"
            height={500}
            width={500}
            alt="Block boi store"
          />
        </div>
        <div className="p-8 about--text flex-1">
          <p className="mb-4">
            Welcome to Block Boi, where fashion meets daring adventure! We are a
            unique and vibrant fashion store that caters to the chic, daring,
            and adventurous souls out there. At Block Boi, we believe that
            fashion is more than just clothing—it's a way to express your
            individuality, your fearless spirit, and your love for exploration.
            We curate a carefully selected collection of clothing, accessories,
            and footwear that embodies this philosophy, bringing together the
            perfect fusion of style and adventure. Our store is a haven for
            those who crave something beyond the ordinary.{" "}
          </p>

          <p>
            We understand that fashion should empower you to break free from the
            norms, to take risks, and to embrace your own personal journey.
            Whether you're an urban explorer, a festival-goer, or an adrenaline
            junkie, we have the perfect pieces to elevate your style and fuel
            your sense of adventure. From bold and vibrant prints to edgy and
            unconventional designs, our fashion offerings are meant to inspire
            and ignite your imagination. We collaborate with emerging designers
            and seek out unique brands that share our passion for pushing
            boundaries and redefining what it means to be stylish.
          </p>
        </div>
      </div>
      <aside className="grid place-content-center my-16">
        <h2 className="text-7xl font-bold sails-text">Block Boi</h2>
      </aside>
    </section>
  );
};

export default About;
