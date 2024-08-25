"use client";

import { Dispatch, SetStateAction, useState } from "react";

const TodoButtonOnClick = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  if (count == 0) {
    alert("todo");
  } else if (count == 1) {
    alert("何も無いよ");
  } else if (count == 2) {
    alert("本当に何も無いってば");
  } else if (count == 3) {
    alert("もしかして暇？");
  } else if (count == 4) {
    alert("...");
  } else {
    alert("もう何も無いよ");
  }
  setCount(count + 1);
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TodoButton: React.FC<Props> = ({ children, className }) => {
  const [count, setCount] = useState(0);
  return (
    <button
      className={className}
      onClick={() => {
        TodoButtonOnClick({ count, setCount });
      }}
    >
      {children}
    </button>
  );
};

export default TodoButton;
