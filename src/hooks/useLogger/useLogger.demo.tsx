import React from 'react';

import { useLogger } from './useLogger';

const Demo = () => {
  const [count, setCount] = React.useState(0);

  useLogger('Demo', [count, { foo: 'bar' }]);

  return (
    <button type='button' onClick={() => setCount(count + 1)}>
      Update state {count}
    </button>
  );
};

export default Demo;
