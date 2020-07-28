import React from 'react';
import HOC from './HOC';
const example = (props: any): any => (
  <p>
    {props.message} {props.name}
  </p>
);
// const Message = ({ name, message }: MessageProps): any => {
//   return (
//     <p>
//       {name}, {message}
//     </p>
//   );
// };
const Message = HOC(example);
export default Message;
