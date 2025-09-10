const Child = ({ imageId, titulo }) => {
  return (
    <div>
        <h3>{titulo}</h3>
      <img src = {"https://picsum.photos/id/"+imageId+"/200/300"} alt="imagen"
      />
    </div>
  );
};

export default Child;