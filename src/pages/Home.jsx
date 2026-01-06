import React from "react";
import { Link } from "react-router";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div>
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          <div className="max-w-2xl bg-paper/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-4 border-clay shadow-lg relative overflow-hidden group transition-all hover:shadow-xl hover:scale-[1.01] duration-500">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-border rounded-tl-3xl m-4 opacity-60" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-border rounded-br-3xl m-4 opacity-60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-border/40 rounded-tr-xl m-6" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-border/40 rounded-bl-xl m-6" />

            <h1 className="font-title text-4xl md:text-6xl text-ink mb-8 drop-shadow-sm tracking-wide">
              Greetings, Seeker.
            </h1>

            <div className="space-y-8 text-lg md:text-xl text-ink/90 font-serif leading-relaxed">
              <p>
                "You have crossed the threshold of the mundane to stand before the{" "}
                <span className="font-bold text-border border-b border-clay/50">
                  Tablet of Destinies
                </span>
                . <br />
                It is rare for a soul to find its way here without guidance."
              </p>

              <p>
                "This archive holds more than mere memories; it contains the
                echoes of gods and monsters, the rise of empires, and the fall of
                stars. To read these tablets is to accept a burden of truth that
                few can carry. Here, knowledge is not a gift, but a{" "}
                <span className="font-bold text-border">trial</span>."
              </p>

              <div className="pt-4">
                <p className="italic text-base opacity-90">
                  "The path lies open, but the journey is yours alone. Will you
                  study the souls of the{" "}
                  <Link
                    to="/characters"
                    className="font-bold text-border hover:text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors"
                  >
                    Characters
                  </Link>
                  , or witness the weaving of fate within the{" "}
                  <Link
                    to="/timeline"
                    className="font-bold text-border hover:text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors"
                  >
                    Timeline
                  </Link>
                  ? Choose wisely."
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1.5 bg-linear-to-r from-transparent via-border/60 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
