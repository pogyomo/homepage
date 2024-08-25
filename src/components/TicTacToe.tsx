"use client";

import boxStyle from "@/lib/boxStyle";
import { Dispatch, SetStateAction, useState } from "react";

type Cell = " " | "f" | "s";
type Row = [Cell, Cell, Cell];

class Board {
  constructor() {
    this.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }
  at(row: 0 | 1 | 2, col: 0 | 1 | 2): Cell {
    return this.board[row][col];
  }
  setFirst(row: 0 | 1 | 2, col: 0 | 1 | 2): Board {
    if (this.board[row][col] != " ") {
      throw Error(`${row}:${col} already filled`);
    } else {
      let board = new Board();
      board.board = structuredClone(this.board);
      board.board[row][col] = "f";
      return board;
    }
  }
  setLast(row: 0 | 1 | 2, col: 0 | 1 | 2) {
    if (this.board[row][col] != " ") {
      throw Error(`${row}:${col} already filled`);
    } else {
      let board = new Board();
      board.board = structuredClone(this.board);
      board.board[row][col] = "s";
      return board;
    }
  }
  checkDraw(): boolean {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.board[row][col] == " ") return false;
      }
    }
    return !this.checkWin("f") && !this.checkWin("s");
  }
  checkWin(check: Exclude<Cell, " ">): boolean {
    for (let row = 0; row < 3; row++) {
      let success = true;
      for (let col = 0; col < 3; col++)
        success &&= this.board[row][col] == check;
      if (success) return true;
    }
    for (let col = 0; col < 3; col++) {
      let success = true;
      for (let row = 0; row < 3; row++)
        success &&= this.board[row][col] == check;
      if (success) return true;
    }
    if (
      this.board[0][0] == check &&
      this.board[1][1] == check &&
      this.board[2][2] == check
    )
      return true;
    if (
      this.board[0][2] == check &&
      this.board[1][1] == check &&
      this.board[2][0] == check
    )
      return true;
    return false;
  }
  private board: [Row, Row, Row];
}

const doTurn = ({
  board,
  setBoard,
  move,
  setMove,
  row,
  col,
}: {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  move: "f" | "s";
  setMove: Dispatch<SetStateAction<"f" | "s">>;
  row: 0 | 1 | 2;
  col: 0 | 1 | 2;
}): "continue" | "done" | "draw" => {
  let nextBoard =
    move == "f" ? board.setFirst(row, col) : board.setLast(row, col);
  setMove(move == "f" ? "s" : "f");
  setBoard(nextBoard);
  if (nextBoard.checkWin(move)) return "done";
  else if (nextBoard.checkDraw()) return "draw";
  else return "continue";
};

const TicTacToe: React.FC = ({}) => {
  const [board, setBoard] = useState(new Board());
  const [move, setMove] = useState<"f" | "s">("f");
  const [player, setPlayer] = useState<"f" | "s">("f");

  let poses: [0 | 1 | 2, 0 | 1 | 2][] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      poses.push([row as 0 | 1 | 2, col as 0 | 1 | 2]);
    }
  }

  const cellColorByCellValue = (cell: Cell): string => {
    if (cell == " ") {
      return "bg-white";
    } else if (cell == "f") {
      return "bg-sky-300";
    } else {
      return "bg-rose-300";
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2">
          <button
            className={boxStyle}
            onClick={() => {
              setBoard(new Board());
              setMove("f");
              setPlayer("f");
            }}
          >
            as first player
          </button>
          <button
            className={boxStyle}
            onClick={() => {
              setBoard(new Board());
              setMove("f");
              setPlayer("s");
            }}
          >
            reset as second player
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 size-64">
          {poses.map((pos) => {
            let row = pos[0];
            let col = pos[1];
            return (
              <button
                className={`border-2 border-black ${cellColorByCellValue(board.at(row, col))}`}
                onClick={() => {
                  try {
                    let result = doTurn({
                      board,
                      setBoard,
                      move,
                      setMove,
                      row,
                      col,
                    });
                    if (result == "done") {
                      if (move == "f") {
                        alert("first player win!");
                      } else {
                        alert("second player win!");
                      }
                      setBoard(new Board());
                      setMove("f");
                    } else if (result == "draw") {
                      alert("draw!");
                      setBoard(new Board());
                      setMove("f");
                    }
                  } catch (e) {
                    alert(`${row}:${col} already filled`);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
