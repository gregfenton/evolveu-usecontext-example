import React, { useContext } from 'react';
import { MySampleContext } from './MySampleProvider';

const ShowTheValueZone = () => {
  const { aaa, setAaa } = useContext(MySampleContext);

  return (
    <div style={{margin: 20}}>
      <p>
        Value of aaa: <span style={{color: 'red'}}>{aaa}</span>
      </p>
    </div>
  );
};

export default ShowTheValueZone;
