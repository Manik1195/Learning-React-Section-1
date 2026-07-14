export function BillService({ label, options,value,handleService }) {
  return (
    <>
      <div className="select-drop">
        <label style={{ marginLeft: "-10px" }}>{label}</label>
        <select value={value} onChange={e=>handleService(e.target.value)}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </>
  );
}
