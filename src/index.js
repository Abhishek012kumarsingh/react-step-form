import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from "./components/UserForm";

const App = () => {
    return (
      <div>
        <UserForm></UserForm>
      </div>
    );
};

ReactDOM.render(<App/> ,document.querySelector("#root"));
