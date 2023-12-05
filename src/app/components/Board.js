export const Board = () => {
  const { data } = useGame();

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
