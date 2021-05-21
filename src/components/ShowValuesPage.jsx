import React, { useContext } from 'react';
import { MySampleContext } from './MySampleProvider';

const ShowValuesPage = () => {
  const { aaa, setAaa } = useContext(MySampleContext);

  return (
    <div>
      <h1>
        Value of aaa: <span style={{color: 'red'}}>{aaa}</span>
      </h1>
      Enter a new value here:{' '}
      <input
        type='text'
        onChange={(ev) => {
          let val = ev.target.value;
          setAaa(val);
        }}
      />
    </div>
  );
};

export default ShowValuesPage;
