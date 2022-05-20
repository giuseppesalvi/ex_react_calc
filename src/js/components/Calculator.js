import Row from "./Row";

function newRow(sign = "+", value = 0, disabled = false) {
  return { sign: sign, value: value, disabled: disabled };
}

function computeResult(currentResult, currentRow) {
  return currentResult + currentRow.value * (currentRow.sign == "-" ? -1 : 1);
}

const initialValues = [
  newRow("+", 4, false),
  newRow("-", 3, false),
  newRow("+", 2, true),
];

export default function Calculator() {
  const [rows, setRows] = React.useState(initialValues);

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12 px-0">
          <h2>CALCULATOR</h2>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={() => setRows([...rows, newRow()])}
          >
            Add Row
          </button>

          {rows.map((row, index) => (
            <Row
              key={index}
              sign={row.sign}
              value={row.value}
              disabled={row.disabled}
              setSign={(newSign) => {
                setRows(
                  rows.map((r) => (r === row ? { ...r, sign: newSign } : r))
                );
              }}
              setValue={(newValue) => {
                setRows(
                  rows.map((r) => (r === row ? { ...r, value: newValue } : r))
                );
              }}
              setDisabled={(newDisabled) => {
                setRows(
                  rows.map((r) =>
                    r === row ? { ...r, disabled: newDisabled } : r
                  )
                );
              }}
              deleteRow={() => {
                setRows(rows.filter((r) => r !== row));
              }}
            />
          ))}
          <h4 className="mt-4">
            {`Result = ${rows
              .filter((r) => r.disabled == false)
              .reduce(computeResult, 0)
              .toFixed(2)}`}
          </h4>
        </div>
      </div>
    </div>
  );
}
