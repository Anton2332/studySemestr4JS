import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  getText() {
    return <p>Текст</p>;
  }

  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }

  render() {
    const text2 = "Текст";
    const text3 = <p>Тексе</p>;
    const text14 = <p>Текст1</p>;
    const text24 = "<p>Текст2</p>";
    const attr5 = "block";
    const css7 = {
      color: "green",
      border: "1px solid black",
      borderRadius: "30px",
    };
    const show8 = true;
    let text8 = "Текст2";
    if (show8) {
      text8 = "Текст1";
    }

    const arr9 = ["a", "b", "c", "d", "e"];
    const list9 = arr9.map((item, index) => { return <li key={index}>{item}</li> });
    return (
      <div>
        //1
        <div>
          текст
        </div>

        //2
        <div>
          {text2}
        </div>

        //3
        <div>
          {text3}
        </div>

        //4
        <div>
          {text14}
          <p>!!!</p>
          {text24}
        </div>
        //5
        <div id={attr5}>
          Текст
        </div>
        //6
        <div className={attr5}>
          Текст
        </div>
        //7
        <div style={css7}>
          Текст
        </div>
        //8
        <div>
          {text8}
        </div>
        //9
        <ul>
          {list9}
        </ul>
        //10
        <div>
          {this.getText()}
        </div>
        //11
        <div>
          Текст {this.getNum1() + this.getNum2()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);











