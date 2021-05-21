import React, { createContext, useState } from 'react';

export const MySampleContext = createContext({});

export const MySampleProvider = (props) => {
  let theChildren = props.children; // propogate any nested/child components

  const [aaa, setAaa] = useState(424242);

  return (
    <MySampleContext.Provider value={{ aaa, setAaa }}>
      {theChildren}
    </MySampleContext.Provider>
  );
};
