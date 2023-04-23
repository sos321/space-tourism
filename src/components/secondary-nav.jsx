import data from "../data/data.json";

export default function Nav(props) {
  function clickHandler(i) {
    props.onClick(i);
  }

  return (
    <div className="flex items-center gap-10 mb-16">
      {data.destinations.map((destination, i) => (
        <button
          className={`${
            props.planet === i
              ? "border-white border-solid border-b-2"
              : "border-transparent border-solid border-b-2 hover:border-white hover:border-solid hover:border-b-2 hover:border-opacity-50"
          } text-xl uppercase tracking-widest flex gap-2 h-full items-center transition-all`}
          key={i}
          onClick={() => {
            clickHandler(i);
          }}
        >
          {destination.name}
        </button>
      ))}
    </div>
  );
}
