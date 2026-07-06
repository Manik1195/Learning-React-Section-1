export function Button({ name, className,click }) {
  return (
    <>
      <button className={className} onClick={click}>{name}</button>
    </>
  );
}
