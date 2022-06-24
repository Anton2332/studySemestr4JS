import React from 'react';
import { createRef } from "react";
import ReactDOM from 'react-dom';
import './index.css';

class App1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [
        { name: "1", checked: true },
        { name: "2", checked: true },
        { name: "3", checked: true },
        { name: "4", checked: true },
      ]
    }
  }

  chageValue = (event) => {
    this.setState(state => {
      var list = state.numbers
      list[Number(event.target.value)].checked = event.target.checked
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.numbers.map((item, index) => {
      return <li key={index} className={item.checked ? "textDecoration" : ""}>
        {item.name} < input type="checkbox" value={index} checked={item.checked} onChange={this.chageValue} />
      </li >
    })
    return (
      <div>
        --1 < br />
        <ul>
          {list}
        </ul>
      </div >
    )
  }
}

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workers: [
        { name: 'Микола', surname: 'Шевченко', salary: 3000, checked: true },
        { name: 'Василь', surname: 'Чумак', salary: 3500, checked: true },
        { name: 'Петро', surname: 'Стеценко', salary: 4000, checked: true },
      ]

    }
  }

  chageCheck = (event) => {
    this.setState(state => {
      var list = state.workers
      list[Number(event.target.value)].checked = event.target.checked
      return {
        list,
      }
    })
  }

  sum() {
    var s = 0
    const array = this.state.workers
    for (var i = 0; i < array.length; i++) {
      if (array[i].checked) {
        s += array[i].salary
      }
    }
    return s
  }


  render() {
    const sum = this.sum()
    const list = this.state.workers.map((item, index) => {
      return <tr key={index}><td>{item.name}</td><td>{item.surname}</td><td>{item.salary}</td><td><input type="checkbox" checked={item.checked} value={index} onChange={this.chageCheck} /></td></tr>
    })
    return (

      <div>
        --2<br />
        <table>
          {list}
        </table>
        {sum}
      </div>
    )
  }
}

class App3 extends React.Component {
  constructor() {
    super()
    this.state = {
      values: [
        { name: "1", checked: true },
        { name: "2", checked: true },
        { name: "3", checked: true },
        { name: "4", checked: true },
      ]
    }
  }

  chageCheck = (event) => {
    this.setState(state => {
      var list = state.values
      list[Number(event.target.value)].checked = event.target.checked
      return {
        list,
      }
    })
  }
  render() {
    const list = this.state.values.map((item, index) => {
      return <div key={index}>
        <input type="checkbox" value={index} checked={item.checked} onChange={this.chageCheck} />
        <p className={item.checked ? "" : "textVisibility"}>{item.name}</p></div>
    })
    return (
      <div>
        //3<br />
        {list}
      </div>
    )
  }
}

class App4 extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: 'Микола', surname: 'Шевченко', age: 30, checked: true },
        { name: 'Василь', surname: 'Чумак', age: 40, checked: true },
        { name: 'Петро', surname: 'Стеценко', age: 50, checked: true },
      ]

    }
  }

  chageCheck = (event) => {
    this.setState(state => {
      var list = state.users
      list[Number(event.target.value)].checked = event.target.checked
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.users.map((item, index) => {
      return <li key={index}>
        {item.name} {item.checked ? item.surname : ""} {item.checked ? item.age : ""} <input type="checkbox" value={index} checked={item.checked} onChange={this.chageCheck} />
      </li>
    })
    return (
      <div>
        //4<br />
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

class App5 extends React.Component {
  constructor() {
    super()
    this.state = {
      values: [
        { name: "1", value: "1", checked: true, inputFocus: createRef() },
        { name: "2", value: "2", checked: true, inputFocus: createRef() },
        { name: "3", value: "3", checked: true, inputFocus: createRef() },
        { name: "4", value: "4", checked: true, inputFocus: createRef() },
      ],

    }

  }

  chageValue = (event, index) => {
    this.setState(state => {

      var list = state.values
      list[index].value = event.target.value;

      return {
        list,
      }
    })
  }

  setFocus(event, index) {
    this.setState(state => {

      var list = state.values
      list[index].checked = false;
      list[index].inputFocus.current.focus()
      return {
        list,
      }
    })
    event.stopPropagation()
  }

  unsetFocus(event, index) {
    const a = this.state.values[index].name
    this.setState({ value: a })
    this.setState(state => {

      var list = state.values
      list[index].checked = true;
      list[index].name = list[index].value;
      return {
        list,
      }
    })
  }


  render() {
    const list = this.state.values.map((item, index) => {
      return <li className="border" tabIndex="0" key={index} value={index} onFocus={(e) => this.setFocus(e, index)}>
        {item.name}
        <input type="text" ref={item.inputFocus} autoFocus={item.checked} value={item.value} className={item.checked ? "textVisibility" : ""} onChange={(e) => this.chageValue(e, index)} onBlur={(e) => this.unsetFocus(e, index)} />
      </li>
    })
    return (
      <div>
        //5<br />
        <ul>
          {list}
        </ul>

      </div>
    )
  }

}


class App6 extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: 'Микола', age: 30, chage1: false, chage2: false, inputFocus1: React.createRef(), inputFocus2: React.createRef() },
        { name: 'Василь', age: 40, chage1: false, chage2: false, inputFocus1: React.createRef(), inputFocus2: React.createRef() },
        { name: 'Петро', age: 50, chage1: false, chage2: false, inputFocus1: React.createRef(), inputFocus2: React.createRef() },
      ]

    }
  }

  handlerClick = (index) => {
    if (!this.state.users[index].chage1) {
      this.setState(state => {
        var list = state.users;
        list[index].chage1 = true;
        return {
          list,
        }
      })

      this.state.users[index].inputFocus1.current.focus()
    } else {
      this.setState(state => {
        var list = state.users;
        list[index].chage1 = false;
        return {
          list,
        }
      })
    }
  }

  handlerClick2 = (index) => {
    if (!this.state.users[index].chage2) {
      this.setState(state => {
        var list = state.users;
        list[index].chage2 = true;
        return {
          list,
        }
      })

      this.state.users[index].inputFocus2.current.focus()
    } else {
      this.setState(state => {
        var list = state.users;
        list[index].chage2 = false;
        return {
          list,
        }
      })
    }
  }

  chageName = (event, index) => {
    this.setState(state => {
      var list = state.users;
      list[index].name = event.target.value;
      return {
        list,
      }
    })
  }

  chageAge = (event, index) => {
    this.setState(state => {
      var list = state.users;
      list[index].age = event.target.value;
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.users.map((item, index) => {
      return <tr key={index}>
        <td>
          {item.name}
          <input type="text" ref={item.inputFocus1} value={item.name} onChange={(e) => this.chageName(e, index)} className={item.chage1 ? "" : "textVisibility"} />
          <input type="button" value="Редагувати" onClick={(e) => this.handlerClick(index)} />
        </td>
        <td>
          {item.age}
          <input type="text" ref={item.inputFocus2} value={item.age} onChange={(e) => this.chageAge(e, index)} className={item.chage2 ? "" : "textVisibility"} />
          <input type="button" value="Редагувати" onClick={() => this.handlerClick2(index)} />
        </td>
      </tr>
    })
    return (
      <div>
        //6<br />
        <table>
          {list}
        </table>
      </div>
    )
  }
}

class App7 extends React.Component {
  constructor() {
    super()
    this.state = {
      tur: [
        "tur1",
        "tur2",
        "tur3"
      ],
      option: 0
    }
  }

  handlerRadionButton = (event) => {
    this.setState({ option: event.target.value })
  }

  render() {
    const list = this.state.tur.map((item, index) => {
      return <label key={index} >
        <input name="radioButton"
          type="radio" value={index} checked={this.state.option == index}
          onChange={this.handlerRadionButton} />
        {item}
      </label>
    })
    return (
      <div>
        //7<br />
        {list}
        <br />
        {this.state.tur[this.state.option]}
      </div>
    )
  }
}

class App8 extends React.Component {
  constructor() {
    super()
    this.state = {
      input1: "",
      input2: "",
      notes: [
        { header: "1", text: "text", hour: 12, minute: 12, second: 12 }
      ]
    }
  }

  chageInput1 = (event) => {
    this.setState({ input1: event.target.value })
  }

  chageInput2 = (event) => {
    this.setState({ input2: event.target.value })
  }

  addNodes = () => {
    this.setState(state => {
      var list = state.notes
      var ob = {
        header: state.input1,
        text: state.input2,
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      }
      list.push(ob)
      return {
        list,
      }
    })
    this.setState({ input1: "" })
    this.setState({ input2: "" })
  }

  dellItem = (index) => {
    this.setState(state => {
      var list = state.notes
      list.pop(index)
      return {
        list,
      }
    })
  }

  redItem = (index) => {
    var ob = this.state.notes[index]
    this.setState({ input1: ob.header })
    this.setState({ input2: ob.text })
    this.dellItem(index)
  }

  render() {
    const list = this.state.notes.map((item, index) => {
      return <div key={index}>
        <h4>{item.header}</h4>
        <p>{item.text}</p>
        <p>{item.hour}:{item.minute}:{item.second}</p>
        <input type='button' value="Видалити" onClick={() => this.dellItem(index)} />
        <input type='button' value="Редагувати" onClick={() => this.redItem(index)} />
      </div>
    })
    return (
      <div>
        //8<br />
        <input type="text" value={this.state.input1} onChange={this.chageInput1} />
        <br />
        <textarea value={this.state.input2} onChange={this.chageInput2} />
        <br />
        <input type="button" value="Додати запис" onClick={this.addNodes} />
        <br /><br />
        {list}
      </div>
    )
  }
}

class App9 extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: 'Микола', surname: 'Шевченко', salary: 3000 },
        { name: 'Василь', surname: 'Чумак', salary: 4000 },
        { name: 'Петро', surname: 'Стеценко', salary: 5000 },
      ]

    }
  }

  sortByName = () => {
    this.setState(state => {
      var list = state.users
      list.sort((a, b) => a.name > b.name ? 1 : -1);
      return {
        list,
      }
    })
  }

  sortBySurname = () => {
    this.setState(state => {
      var list = state.users
      list.sort((a, b) => a.surname > b.surname ? 1 : -1);
      return {
        list,
      }
    })
  }

  sortBySalary = () => {
    this.setState(state => {
      var list = state.users
      list.sort((a, b) => a.salary > b.salary ? 1 : -1);
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.users.map((item, index) => {
      return <tr key={index}>
        <td>
          {item.name}
        </td>
        <td>
          {item.surname}
        </td>
        <td>
          {item.salary}
        </td>
      </tr>
    })
    return (
      <div>
        //9<br />
        <table>
          {list}
          <tr>
            <td>
              <input type="button" value="Сортувати по Імені" onClick={this.sortByName} />
            </td>
            <td>
              <input type="button" value="Сортувати по Прізвищю" onClick={this.sortBySurname} />
            </td>
            <td>
              <input type="button" value="Сортувати по Зарплаті" onClick={this.sortBySalary} />
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class App10 extends React.Component {
  constructor() {
    super()
    this.state = {
      selectValue: false,
      weeks: [
        { ukr: "Понеділок", eng: "Monday" },
        { ukr: "Вівторок", eng: "Tuesday" },
        { ukr: "Середа", eng: "Wednesday" },
        { ukr: "Четвер", eng: "Thursday" },
        { ukr: "П’ятниця", eng: "Friday" },
        { ukr: "Субота", eng: "Saturday" },
        { ukr: "Неділя", eng: "Sunday" },

      ]
    }
  }

  chageInputValueSelect = (event) => {
    this.setState({ selectValue: event.target.value == "true" })
  }

  render() {
    const list = this.state.weeks.map((item, index) => {
      return <option key={index} value={index}>{this.state.selectValue ? item.ukr : item.eng}</option>
    })
    return (
      <div>
        //10<br />
        <select value={this.state.selectValue} onChange={this.chageInputValueSelect}>
          <option value="true">Українська</option>
          <option value="false">Англійська</option>
        </select>
        <br />
        <select value={0} onChange={this.chageSelected}>
          {list}
        </select>
      </div>
    )
  }
}

function App() {
  const searchInput = createRef()

  function handleFocus() {
    searchInput.current.focus()
  }

  return (
    <div>
      <label>Search </label>
      <input ref={searchInput} />
      <button onClick={handleFocus}>Set focus</button>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App1 /><br />
    <App2 /><br />
    <App3 /><br />
    <App4 /><br />
    <App5 /><br />
    <App6 /><br />
    <App7 /><br />
    <App8 /><br />
    <App9 /><br />
    <App10 /><br />
  </React.StrictMode>,
  document.getElementById('root')
);
