import { useCallback, useState } from "react";

interface Props {
  initialState?: boolean;
}

const useToggle = ({ initialState = false }: Props) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

export default useToggle;
