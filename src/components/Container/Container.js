import { ContainerMUI } from "./styles";

function Container({ children }) {
  return <ContainerMUI maxWidth="xl">{children}</ContainerMUI>;
}

export default Container;
