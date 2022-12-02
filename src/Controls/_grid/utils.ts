import React from 'react';

export function useForceUpdate(){
   const [_, setValue] = React.useState(0); // integer state
   return () => setValue(value => value + 1); // update state to force render
}
