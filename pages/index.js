import { useState } from 'react';
import styled from 'styled-components';

const Index = styled.div`
  line-height: 2em;
`;

const Button = styled.span`
  font-weight: bold;
  background-color: black;
  color: white;
  padding: 0 10px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;


export default () => {
  const [msg, setMsg] = useState(false);

  const fetchMsg = async () => {
    let response = await fetch('/api/hello');
    response = await response.json();
    response = JSON.stringify(response, null, 2);
    setMsg(response);
  }

  return (
    <Index>
      <div>This content is templated by next.js</div>
      <div>
        <Button onClick={fetchMsg}>Fetch</Button> a message from the next.js api
        {msg && <div>/api/hello says: {msg}</div>}
      </div>
    </Index>
  )
}