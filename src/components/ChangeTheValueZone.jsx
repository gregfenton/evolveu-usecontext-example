import React, { useContext } from 'react';
import { MySampleContext } from './MySampleProvider';

const ChangeTheValueZone = () => {
  const { setAaa } = useContext(MySampleContext);

  return (
    <div style={{margin: 20}}>
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

export default ChangeTheValueZone;
