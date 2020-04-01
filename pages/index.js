import { useState } from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Client } from '../utils/prismic-configuration';

const Layout = styled.div`
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


const Index = ({ doc }) => {
  const [msg, setMsg] = useState(false);

  console.log({ doc });

  const fetchMsg = async () => {
    let response = await fetch('/api/hello');
    response = await response.json();
    response = JSON.stringify(response, null, 2);
    setMsg(response);
  }

  return (
    <Layout>
      {RichText.render(doc.data.header)}
      {RichText.render(doc.data.body)}
      <div>
        <Button onClick={fetchMsg}>Fetch</Button> a message from the next.js api
        {msg && <div>/api/hello says: {msg}</div>}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async ctx => {
  const req = ctx.req;
  const home = await Client(req).getSingle('home_page');
  console.log({ home });
  return { doc: home };
}

export default Index;