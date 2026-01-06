import React from "react";
import StatRadar from "./StatRadar.jsx";
import { getCharacterById } from "../const/characters";
import Quote from "./Quote.jsx";
import StatBar from "./StatBar.jsx";
import useParseGrade from "../hooks/use-parse-grade.jsx";
import Tooltip from "./Tooltip.jsx";
import AlternativeView from "./AlternativeView";
//Lista ítems de información general(etiqueta con ancho fijo + valor flexible)
const InfoItem = ({ icon, label, value }) => (
  <li className="flex items-start border-l-4 border-border pl-2 min-h-0 text-base">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="mr-2 mt-1 shrink-0"
      aria-hidden="true"
    >
      {icon || (
        <path
          d="M3 3 L15 3 L9 15 Z"
          fill="var(--color-clay)"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
      )}
    </svg>
    <div className="flex-1 flex flex-row items-start gap-2">
      <span className="font-semibold text-border shrink-0 w-28 md:w-48 text-sm md:text-base">
        {label}:
      </span>
      <div className="text-ink flex-1 wrap-break-words">{value}</div>
    </div>
  </li>
);

// Devuelve el valor total (base + '+')
const GradeToValue = (grade) => useParseGrade(grade).totalValue;

// Devuelve solo el valor base (ignora los '+')
const GradeBaseValue = (grade) => useParseGrade(grade).baseValue;

const STAT_LABELS = [
  { label: "Strength", description: "Physical power and force." },
  { label: "Endurance", description: "Stamina and resilience." },
  { label: "Agility", description: "Speed and nimbleness." },
  { label: "Skill", description: "Dexterity and precision." },
  { label: "Will", description: "Mental fortitude and determination." },
  { label: "Divinity", description: "Connection to divine forces." },
  { label: "Ars", description: "Magical knowledge and power." },
  { label: "Mind", description: "Intellect and reasoning ability." },
];

const CharSheet = ({ id }) => {
  const char = getCharacterById(parseInt(id));
  if (!char) return <div>Character not found</div>;
  // Procesar stats usando la información del personaje seleccionado
  // Las etiquetas de los stats son fijas y se declaran aquí (autoritativas para la vista)

  const stats = (char?.stats || []).map((stat, idx) => ({
    // grade viene de los datos del personaje; label se toma de STAT_LABELS
    label: STAT_LABELS[idx].label,
    grade: stat?.grade ?? "?",
    filled: GradeToValue(stat?.grade),
    _idx: idx,
  }));

  const radarStatsBase = (char?.stats || []).map((s, idx) => ({
    label: STAT_LABELS[idx].label,
    grade: s?.grade ?? "?",
    filled: GradeBaseValue(s?.grade),
  }));

  return (
    <div className="max-w-5xl mx-auto my-6 px-4 sm:px-6">
      <AlternativeView currentId={char.id} currentName={char.info.name} />
      <div className="flex flex-col md:flex-row rounded-3xl  border-clay p-2 md:p-4  backdrop-blur-sm bg-sand/60">
        {/* Nombre,Ilustración grande y stats radar */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 rounded-3xl border-clay p-2 md:p-4">
          <div className="flex-none w-full md:w-[320px] flex flex-col items-center justify-start ">
            <h1 className="text-4xl font-extrabold mb-6 text-border">
              {char.info.name}
            </h1>

            <div className="bg-sand/60 border-4 border-clay rounded-2xl p-4">
              <img
                src={char.images.full}
                alt="Character Full Illustration"
                className="w-full max-w-xs sm:max-w-sm md:w-64 md:h-[22.5rem] h-auto object-cover rounded-2xl border-4 border-border"
              />
            </div>
            <div className="relative w-full max-w-[16.25rem] h-[13.75rem] mx-auto mt-3">
              <div className="absolute inset-0">
                <StatRadar
                  stats={stats}
                  fillColor="#e57373"
                  fillOpacity={0.7}
                  compact
                />
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <StatRadar
                  stats={radarStatsBase}
                  compact
                  fillColor="var(--color-clay)"
                  fillOpacity={0.5}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Sección de información general y stats */}
        <div className="flex-1 flex flex-col justify-start items-start text-left mt-4 md:mt-0 border-clay rounded-2xl p-4 min-w-0">
          <Quote quote={char.cite.own} autor={char.info.name} />
          <div className="flex flex-col w-full text-left">
            <h2 className="text-xl font-bold mb-2 mt-2 text-border tracking-wide font-title">
              General Information
            </h2>
            <ul
              className="list-none p-0 mb-2 text-base"
              aria-label="General Information"
            >
              {[
                {
                  label: "Also known as",
                  value: char.info.titles,
                },
                {
                  label: "Alignment",
                  value: char.info.alignments,
                },
                {
                  label: "Native Land",
                  value: char.info.native,
                },
                {
                  label: "Birthday",
                  value: char.info.birthday,
                },
                {
                  label: "Age",
                  value: char.info.age,
                },
                {
                  label: "Gender",
                  value: char.info.gender,
                },
                {
                  label: "Race",
                  value: char.info.race,
                },
                {
                  label: "Height",
                  value: char.info.height + "cm",
                },
                {
                  label: "Weight",
                  value: char.info.weight + "kg",
                },
                {
                  label: "Elements",
                  value: char.info.elements,
                },
                {
                  label: "Given Phase",
                  value: char.info.givenPhase,
                },
              ].map((item) => (
                <InfoItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </ul>
            <Tooltip text="Normal people ranks between F to A, while extraordinary individuals can reach S and beyond.">
              <h2 className="text-xl font-bold mb-2 mt-4 text-border tracking-wide font-title">
                Stats / Value
              </h2>
            </Tooltip>
            <div
              className="flex flex-col gap-2 w-full min-w-0"
              aria-label="Stats"
            >
              {stats.map((stat) => (
                <div key={stat._idx} className="flex items-center gap-2">
                  <div className="flex-1">
                    <StatBar
                      label={stat.label}
                      filled={stat.filled}
                      grade={stat.grade}
                      description={STAT_LABELS[stat._idx].description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Separador decorativo */}
      <div className="w-full flex justify-center my-6">
        <div className="border-t-2 border-dotted border-border w-full sm:w-3/4 rounded-full" />
      </div>
      {/* Sección biografía y retrato */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-2 px-0 pb-4 bg-sand/60 rounded-3xl p-2 md:p-4 backdrop-blur-sm">
        {/* Biografía */}
        <div className="flex-1 p-2 sm:p-4 md:pr-8">
          <h2
            className="text-3xl font-bold text-border mb-2 tracking-wide font-title"
            id="desc-heading"
          >
            Description
          </h2>
          <p
            className="text-base leading-relaxed bg-paper/80 rounded-lg p-2 text-justify text-ink border-l-4 border-border shadow font-serif"
            aria-labelledby="desc-heading"
          >
            {char.descripcion}
          </p>
        </div>
        {/* Retrato decorativo */}
        <div className="flex-none w-full md:w-65 flex flex-col items-center justify-start p-2 sm:p-4 mt-4 md:mt-0">
          <Quote quote={char.cite.outsider} autor={char.cite.autor} />
          <div className="border-4 border-border rounded-2xl bg-sand/60 p-2 inline-block shadow-[0_0_12px_0_var(--color-clay)] relative group">
            <img
              src={char.images.portrait}
              alt="Character Portrait"
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl border-4 border-clay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharSheet;
