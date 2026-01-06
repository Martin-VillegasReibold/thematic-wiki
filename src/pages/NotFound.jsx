import React from "react";
import { Link } from "react-router";
import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-2xl bg-paper/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-4 border-clay shadow-lg relative overflow-hidden group transition-all hover:shadow-xl hover:scale-[1.01] duration-500">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-border rounded-tl-3xl m-4 opacity-60" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-border rounded-br-3xl m-4 opacity-60" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-border/40 rounded-tr-xl m-6" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-border/40 rounded-bl-xl m-6" />

          <h1 className="font-title text-4xl md:text-6xl text-ink mb-8 drop-shadow-sm tracking-wide">
            You have strayed, Seeker.
          </h1>

          <div className="space-y-8 text-lg md:text-xl text-ink/90 font-serif leading-relaxed">
            <p>
              "The threads of fate do not weave here. You have stepped into the{" "}
              <span className="font-bold text-border border-b border-clay/50">
                Void
              </span>{" "}
              between pages, <br />a place where no history is written and no
              destiny is recorded."
            </p>

            <p>
              "Do not despair, for even the lost can find their way back to the
              light. The Tablet of Destinies is vast, but this corner is empty. To
              linger here is to invite{" "}
              <span className="font-bold text-border">oblivion</span>."
            </p>

            <div className="pt-4">
              <p className="italic text-base opacity-90">
                "Return to the path, before the silence consumes you.{" "}
                <Link
                  to="/"
                  className="font-bold text-border hover:text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors"
                >
                  Return Home
                </Link>
                ."
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1.5 bg-linear-to-r from-transparent via-border/60 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
