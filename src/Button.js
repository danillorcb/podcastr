export default function Button({title, color}) {
  return (
    <button style={{background: color}}>{title}</button>
  );
}