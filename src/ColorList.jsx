function ColorList() {
  const colors = ["red", "blue", "green"];

  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
}
export default ColorList