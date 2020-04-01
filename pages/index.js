import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { Client } from '../utils/prismic-configuration';

const Index = ({ doc }) => {
  const [msg, setMsg] = useState(false);
  const { data } = doc;
  const { image, header, body } = data;
  console.log({ doc });

  const fetchMsg = async () => {
    let response = await fetch('/api/hello');
    response = await response.json();
    response = JSON.stringify(response, null, 2);
    setMsg(response);
  }

  return (
    <div>
      <style jsx>{`
        .layout {
          line-height: 2em;
        }

        .button {
          font-weight: bold;
          background-color: black;
          color: white;
          padding: 0 10px;
          border-radius: 5px;
        }

        .button:hover {
          cursor: pointer;
        }
      `}</style>
      {header && RichText.render(header)}
      {image && <img src={image.url} alt={image.alt} />}
      {body && RichText.render(body)}
      <div className="layout">
        <span className="button" onClick={fetchMsg}>Fetch</span> a message from the next.js api
        {msg && <div>
          <span className="button" onClick={() => setMsg(false)}>X</span> /api/hello says: {msg}
        </div>}
      </div>
    </div>
  )
}

Index.getInitialProps = async ctx => {
  const req = ctx.req;
  const home = await Client(req).getSingle('home_page');
  console.log({ home });
  return { doc: home };
}

export default Index;