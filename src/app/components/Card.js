import { Main } from "./Main";
export const Card = ({ id, value, src }) => {
  const { flipped, setFlipped, isRunning, solved } = useGame();

  const isFlipped = flipped.includes(id);

  const isSolved = solved.includes(id);

  const handleClick = () => {
    if (isFlipped || !isRunning || isSolved) {
      return;
    }
    setFlipped((flipped) => {
      if (flipped.length === 2) {
        return [id];
      }
      return [...flipped, id];
    });
  };
  return (
    <div
      className=""
      onClick={handleClick}
      style={{ opacity: isSolved ? 0 : 1 }}
    >
      {isFlipped && <Image src={src} alt={value} fill />}
    </div>
  );
};
