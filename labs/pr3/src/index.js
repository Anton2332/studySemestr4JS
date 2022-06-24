import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "Іван",
      age1: 25,
      name3: "Іван",
      age3: 25,
      name4: "Іван",
      age4: 25,
      show5: false,
      name5: "Іван",
      show6: false,
      name6: "Іван",
      age6: 25,
      show7: false,
      name7: "Іван",
      age7: 25,
      show8: false,
      name8: "Іван",
      age8: 25,
      arrNames: ["Коля", "Вася", "Петя"],
      hrefs11: [
        { href: "1.html", text: "Посилання 1" },
        { href: "2.html", text: "Посилання 2" },
        { htef: "3.html", text: "Посилання 3" },
      ]
    };
  }

  showMassage() {
    alert("hello");
  }

  showName() {
    alert(this.state.name1);
  }

  changeNameAndAge() {
    this.setState(
      {
        name4: "Коля",
        age4: 30,
      }
    );
  }

  changeShow6() {
    this.setState({ show6: true })
  }

  changeShow7() {
    this.setState({ show7: !this.state.show7 })
  }

  changeShow8() {
    this.setState({ show8: !this.state.show8 })
  }



  render() {
    if (this.state.show6) {
      var message6 = <p>Ім'я: {this.state.name6} <br /> Вік: {this.state.age6}</p>
    }

    if (this.state.show7) {
      var message7 = <p>Ім'я: {this.state.name7} <br /> Вік: {this.state.age7}</p>
    }

    if (this.state.show8) {
      var message8 = <p>Ім'я: {this.state.name8} <br /> Вік: {this.state.age8}</p>
    }

    const list9 = this.state.arrNames.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })

    const list10 = this.state.arrNames.map((item, index) => {
      return <li key={index}>
        {item} - {index + 1}
      </li>
    })

    const list11 = this.state.hrefs11.map((item, index) => {
      return <li href={item.href} key={index}>
        {item.text}
      </li>
    }
    )
    return (

      <div>
        //1
        <div>
          Ім'я: {this.state.name1}<br />
          Вік: {this.state.age1}
        </div>
        //2<br />
        <button onClick={this.showMassage}>
          Кнопка завдання 2
        </button>
        <br />
        //3
        <br />
        <button onClick={this.showName.bind(this)}>
          Кнопка завдання 3
        </button>
        <br />
        //4
        <div>
          Ім'я: {this.state.name4},<br />
          Вік: {this.state.age4}
        </div>
        <button onClick={this.changeNameAndAge.bind(this)}>
          ChangeNameAndAge
        </button>
        <br />
        //5
        <div>
          <p>
            {this.state.show5 ? "Привіт" : "Пока"}, {this.state.name5}
          </p>
        </div>
        //6
        <div>
          {message6}
          <button onClick={this.changeShow6.bind(this)}>Результат роботи</button>
        </div>
        //7
        <div>
          {message7}
          <button onClick={this.changeShow7.bind(this)}>Результат роботи</button>
        </div>
        //8
        <div>
          {message8}
          <button onClick={this.changeShow8.bind(this)}>{this.state.show8 ? "Сховати" : "Показати"}</button>
        </div>
        //9
        <ul>
          {list9}
        </ul>
        //10
        <ul>
          {list10}
        </ul>
        //11
        <ul>
          {list11}
        </ul>


      </div >
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
