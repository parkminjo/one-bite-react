import Even from './Even';

const Viewer = ({ count }) => {
  return (
    <section>
      <div>현재 카운트:</div>
      <h1>{count}</h1>
      {count % 2 === 0 && <Even />}
    </section>
  );
};

export default Viewer;
