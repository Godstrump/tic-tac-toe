import { useState, useEffect } from "react";
import Square from "./Square";

const rowStyle = {
  display: "flex",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#f33610",
  color: "white",
  fontSize: "16px",
  outline: "none",
  border: "none",
  borderRadius: "6px",
};

const boardStyle = {
  backgroundColor: "white",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const status = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  color: "green",
};

const Board = () => {
  const [rowNumber] = useState([
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ]);

  const [x] = useState("X");
  const [o] = useState("O");
  const [xO, setXO] = useState({});
  const [isXNxt, setIsXNxt] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const clickRow = (i) => {
    if (gameOver) return;

    if (isXNxt && !xO[i]) {
      setXO({ ...xO, [i]: x });
      setIsXNxt(!isXNxt);
      // console.log('xo', xO)
      return;
    }

    if (!isXNxt && !xO[i]) {
      setXO({ ...xO, [i]: o });
      // console.log('oX', xO)
      setIsXNxt(!isXNxt);
      return;
    }
  };

  useEffect(() => {
    if (xO[1] === x && xO[2] === x && xO[3] === x) {
      setGameOver(true);
      setWinner(x);
      return;
    }
    if (xO[1] === o && xO[2] === o && xO[3] === o) {
      setGameOver(true);
      setWinner(o);
      return;
    }

    if (xO[4] === o && xO[5] === o && xO[6] === o) {
      setGameOver(true);
      setWinner(o);
      return;
    }
    if (xO[4] === x && xO[5] === x && xO[6] === x) {
      setGameOver(true);
      setWinner(x);
      return;
    }

    if (xO[7] === x && xO[8] === x && xO[9] === x) {
      setGameOver(true);
      setWinner(x);
      return;
    }
    if (xO[7] === o && xO[8] === o && xO[9] === o) {
      setGameOver(true);
      setWinner(o);
      return;
    }

    if (xO[1] === x && xO[5] === x && xO[9] === x) {
      setGameOver(true);
      setWinner(x);
      return;
    }
    if (xO[1] === o && xO[5] === o && xO[9] === o) {
      setGameOver(true);
      setWinner(o);
      return;
    }

    if (xO[3] === x && xO[5] === x && xO[7] === x) {
      setGameOver(true);
      setWinner(x);
      return;
    }
    if (xO[3] === o && xO[5] === o && xO[7] === o) {
      setGameOver(true);
      setWinner(o);
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (xO[i] === x && xO[i + 3] === x && xO[i + 6] === x) {
        setGameOver(true);
        setWinner(x);
        return;
      }

      if (xO[i] === o && xO[i + 3] === o && xO[i + 6] === o) {
        setGameOver(true);
        setWinner(o);
        return;
      }
    }
  }, [xO, x, o]);

  useEffect(() => {
    if (Object.keys(xO).length === 9) setGameOver(true);
  }, [xO]);

  const reset = () => {
    setXO({});
    setGameOver(false);
    setWinner("");
    setIsXNxt(true);
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{isXNxt ? x : o}</span>
      </div>
      {winner && winner !== "" ? (
        <div id="winnerArea" className="winner" style={status}>
          Winner: <span>{winner}</span>
        </div>
      ) : (
        ""
      )}
      <button onClick={reset} style={buttonStyle}>
        Reset
      </button>
      <div style={boardStyle}>
        {rowNumber &&
          rowNumber.map((row, i) => (
            <div key={i} className="board-row" style={rowStyle}>
              {row &&
                row.map((bx, j) => (
                  <Square
                    key={j}
                    handleClick={() => clickRow(bx)}
                    data={xO[bx]}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Board;
