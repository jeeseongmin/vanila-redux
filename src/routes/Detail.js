import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(id, toDo);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>created at : {toDo?.id}</h5>
    </>
  );
};

function matchStateToProps(state) {
  return { toDos: state };
}

export default connect(matchStateToProps)(Detail);
