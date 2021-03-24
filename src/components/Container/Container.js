import { ContainerMUI } from "./styles";

function Container({ children }) {
  return <ContainerMUI maxWidth="lg">{children}</ContainerMUI>;
}

export default Container;
