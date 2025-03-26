const Greeting = ({name, isCoach}) => {
  return (
      <h1>
        {isCoach ? 'Hello, Coach!' : 'Hello, ' + name + '!'}
      </h1>
  )
}
export default Greeting;