import React, { useRef, useEffect} from 'react';

const FocusedInput = ({
  field,
  ...props
}) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input type="text" ref={inputRef} {...field} {...props} />
  );
}

export default FocusedInput;
