import React, { useState, useCallBack, useMemo} from 'react';
import HookChildren from './HookChildren';

const HookParents = () => {
  const a = 1;
  const [count, setCount] = useState(0);
  const showCount = () => {
    alert(count);
  }
  // const showCountCallBack = useCallBack(() => {
  //   showCount();
  // }, [a]);
  //useCallBack: return copy a function
  // useMemo: return copy a value
  const increaseCountByOne = () => {
    return a + 1;
  }

  const countIncrease = useMemo(() => increaseCountByOne(), []);
  return (
    <div>
      <HookChildren showCount={countIncrease}/>
      <button onClick={()=>setCount(count+1)}> Increase Count</button>
    </div>
  );
};

export default HookParents;