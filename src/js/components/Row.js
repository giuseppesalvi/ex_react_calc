export default function Row({
  sign,
  value,
  disabled,
  setSign,
  setValue,
  setDisabled,
  deleteRow,
}) {
  return (
    <div className="row my-2">
      <button
        type="button"
        className={"btn mx-3 " + (sign == "+" ? "btn-success" : "btn-danger")}
        onClick={() => setSign(sign == "-" ? "+" : "-")}
        disabled={disabled}
        style={{
          opacity: disabled ? 0.5 : 1,
          width: "3rem",
          height: "3rem",
          fontSize: "1.2rem",
          borderRadius: "3rem",
        }}
      >
        {sign}
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          opacity: disabled ? 0.5 : 1,
        }}
        disabled={disabled}
      ></input>
      <button
        type="button"
        className={
          "btn mx-3 " + (disabled ? "btn-outline-secondary" : "btn-secondary")
        }
        onClick={() => setDisabled(!disabled)}
      >
        {disabled ? "Enable" : "Disable"}
      </button>
      <button
        type="button"
        className={"btn btn-danger"}
        onClick={() => deleteRow()}
      >Delete</button>
    </div>
  );
}
