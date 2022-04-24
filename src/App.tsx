import { FC, Suspense, useState } from "react";
import styled, { keyframes } from "styled-components";

type AnimationProps = {
  className?: string;
  duration: number;
};

const Animation: FC<AnimationProps> = ({ className }) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);

  if (isAnimationEnd) {
    throw new Promise(() => {
      console.log(isAnimationEnd);
    });
  }

  return (
    <div
      className={className}
      onAnimationEnd={() => setIsAnimationEnd(true)}
    ></div>
  );
};

const animation1 = keyframes`
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
`;

const AnimationBase = styled(Animation)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  animation: ${animation1};
  animation-duration: ${(props) => props.duration}s;
  animation-fill-mode: forwards;
`;

const Animation1 = styled(AnimationBase)`
  background-color: #7f93c4;
`;

const Animation2 = styled(AnimationBase)`
  background-color: #cbd8f2;
`;

const Animation3 = styled(AnimationBase)`
  background-color: #bdaae6;
`;

type Props = {
  children: React.ReactElement[];
};

const Animated: FC<Props> = ({ children }) => {
  return children.reduce((acc, elem) => (
    <Suspense fallback={elem}>{acc}</Suspense>
  ));
};

const App = () => {
  return (
    <Animated>
      <Animation1 duration={2}></Animation1>
      <Animation2 duration={2}></Animation2>
      <Animation3 duration={2}></Animation3>
      <Animation1 duration={2}></Animation1>
      <Animation2 duration={2}></Animation2>
      <Animation3 duration={2}></Animation3>
    </Animated>
  );
};

export default App;
