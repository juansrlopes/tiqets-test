import React from "react";
import PropTypes from "prop-types";
import "./ResultCard.css";

const ResultCard = props => {
  const { resultItemData } = props;
  return (
    <a href={resultItemData.productUrl} target="_blank">
      <div className="result-card" key={resultItemData.id}>
        <div className="card-content image">
          <img src={resultItemData.image} alt="Result alt" />
        </div>
        <div className="card-content description">
          <h2 className="title">{resultItemData.title}</h2>
          <p className="summary">{resultItemData.summary}</p>
          <p className="price">&euro;{resultItemData.price.toFixed(2)}</p>
        </div>
      </div>
    </a>
  );
};

ResultCard.propTypes = {
  resultItemData: PropTypes.object.isRequired
};

export default ResultCard;
