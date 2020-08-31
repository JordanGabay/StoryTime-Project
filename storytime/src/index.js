import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0/auth0-provider-with-history'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { GlobalProvider } from './Context/GlobalContext'

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

ReactDOM.render(
  <GlobalProvider>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </GlobalProvider>,
  document.getElementById("root")
);

