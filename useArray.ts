import React, { useState } from "react";

const useArray = (initialArray = []) => {
  const [array, setArray] = useState<any[]>(initialArray);

  const push = (item: any) => {
    setArray((oldArr) => [
      ...oldArr,
      typeof item == "object"
        ? Array.isArray(item)
          ? [...item]
          : { ...item }
        : item,
    ]);
  };
  const clear = () => setArray([]);
  const remove = (index: number) => {
    setArray((oldArr) => oldArr.filter((_, i) => i !== index));
  };
  const pop = () => {
    if (array.length == 0) return undefined;
    const removedItem = array[array.length - 1];
    setArray([...array.slice(0, array.length - 1)]);
    return removedItem;
  };
  const insert = (item: any, index: number) => {
    const newArr = [
      ...array.slice(0, index),
      typeof item == "object"
        ? Array.isArray(item)
          ? [...item]
          : { ...item }
        : item,
      ...array.slice(index, array.length),
    ];
    setArray([...newArr]);
  };
  const replace = (item: any, index: number) => {
    const newArr = [...array];
    (newArr[index] =
      typeof item == "object"
        ? Array.isArray(item)
          ? [...item]
          : { ...item }
        : item),
      setArray([...newArr]);
  };
  const removeDoubleValues = () => {
    const newArr = [...new Set(array)];
    setArray([...newArr]);
  };
  return {
    push,
    pop,
    clear,
    remove,
    insert,
    replace,
    array,
    setArray,
    removeDoubleValues,
  };
};

export default useArray;
