import { useSelector } from 'react-redux';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greeting);
  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greeting;