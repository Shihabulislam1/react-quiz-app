function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQueston" })}
      >
        Next
      </button>
    );
  } 

  if(index===numQuestions-1){
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finished
      </button>
    );
  }
}

export default NextButton;
