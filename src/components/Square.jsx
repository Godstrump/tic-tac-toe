const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#f1f1f1",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "25px",
  color: "black",
  fontWeight: "bold",
};

const Square = ({ handleClick, data }) => {
  return (
    <div onClick={handleClick} className="square" style={squareStyle}>
      {data}
    </div>
  );
};

export default Square;
