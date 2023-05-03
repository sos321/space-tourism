export default function Nav(props) {
  function clickHandler(i) {
    props.onClick(i);
  }

  return (
    <div
      className={` ${
        props.customDiv
          ? props.customDiv
          : "flex items-center gap-10 mb-16 lg:justify-center"
      } `}
    >
      {props.items.map((items, i) => (
        <button
          className={`${props.selected === i ? props.active : props.hover} ${
            props.general
          }`}
          key={i}
          onClick={() => {
            clickHandler(i);
          }}
        >
          {props.title === "name"
            ? items.name
            : props.title === "idx"
            ? i + 1
            : ""}
        </button>
      ))}
    </div>
  );
}
