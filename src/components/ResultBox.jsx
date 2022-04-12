import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContextProvider.jsx';

function ResultBox() {
  const { result } = useContext(ApiContext);

  return (
    <div data-testid="resultBox" id="result" className="result">
      {result}
    </div>
  );
}

export default ResultBox;
