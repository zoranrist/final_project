import "./input.component.css";

const Input = ({
  label,
  element,
  type,
  name,
  value,
  valid,
  onChangeHandler,
}) => {
  let inputElement = null;

  switch (element) {
    case "input":
      inputElement = (
        <>
          <input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChangeHandler(e, name)}
            //   style={{ backgroundColor: valid ? null : "rgba(255, 0, 0, 0.2)" }}
          />
          {!valid ? (
            <small style={{ color: "red" }}>Please validate the field</small>
          ) : null}
        </>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChangeHandler(e, name)}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="formControl">
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
