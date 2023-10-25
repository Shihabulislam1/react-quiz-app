function StartScreen({numQuestions=0, handleClick}) {
  return (
    <div className="start">
      <h2>Welcome to the React QUizz!</h2>
      <h3>{numQuestions} questions to test your React mastery.</h3>
      <button className="btn" onClick={()=> handleClick({type:"start"})}>Lets Start</button>
    </div>
  );
}

export default StartScreen;
