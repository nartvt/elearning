import React,{memo} from 'react';

const HookChildren = () => {
  console.log("HookChildren")
  return (
    <div></div>
  );
};

export default memo(HookChildren);