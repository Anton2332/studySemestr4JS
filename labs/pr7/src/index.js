import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App1 extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "",
      booleanValue: false,
    }
  }

  changeValue = (event) => {
    this.setState({ value: event.target.value, booleanValue: event.target.value.length >= 4 && event.target.value.length <= 9 ? true : false })
  }

  render() {

    return (
      <div>
        //1<br />
        <input value={this.state.value} className={this.state.booleanValue ? "colorStyleGreen" : "colorStyleRed"} onChange={this.changeValue} />
      </div>
    )
  }
}

class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      sex: ["чоловік", "жінка"],
      workers: [
        { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
        { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
        { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" }
      ],
      inputSurname: "",
      inputName: "",
      inputSalary: 0,
      inputSex: 0,
    }
  }

  changeInputSurname = (event) => {
    this.setState({ inputSurname: event.target.value })
  }

  changeInputName = (event) => {
    this.setState({ inputName: event.target.value })
  }

  changeInputSalary = (event) => {
    this.setState({ inputSalary: Number(event.target.value) })
  }

  changeInputSex = (event) => {
    this.setState({ inputSex: Number(event.target.value) })
  }

  addWorker = () => {
    const ob = {
      surname: this.state.inputSurname,
      name: this.state.inputName,
      salary: this.state.inputSalary,
      sex: this.state.sex[this.state.inputSex]
    };
    var newWorkers = this.state.workers.slice();
    newWorkers.push(ob);
    this.setState(
      {
        workers: newWorkers,
        inputSurname: "",
        inputName: "",
        inputSalary: 0,
        inputSex: 0
      }
    );

  }

  render() {
    const list = this.state.workers.map((item, index) => {
      return <tr key={index}>
        <td>{item.surname}</td>
        <td>{item.name}</td>
        <td>{item.salary}</td>
        <td>{item.sex}</td>
      </tr>
    })
    const listSex = this.state.sex.map((item, index) => {
      return <option key={index} value={index}>{item}</option>
    })
    return (
      <div>
        //2<br />
        <table>
          {list}
        </table>

        <form>
          <input type="text" value={this.state.inputSurname} onChange={this.changeInputSurname} />
          <input type="text" value={this.state.inputName} onChange={this.changeInputName} />
          <input type="text" value={this.state.inputSalary} onChange={this.changeInputSalary} />
          <select value={this.state.inputSex} onChange={this.changeInputSex}>
            {listSex}
          </select>
          <input type="button" value="Додати" onClick={this.addWorker} />
        </form>
      </div>
    )
  }
}

class App3_0 extends React.Component {
  constructor() {
    super()
    this.state = {
      workers: [
        { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
        { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
        { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" }
      ],
      currentPage: 1,
      perPage: 10,
      totalCount: 0
    }
  }

  render() {
    const list = this.state.workers.map((item, index) => {
      return <tr key={index}>
        <td>{item.surname}</td>
        <td>{item.name}</td>
        <td>{item.salary}</td>
      </tr>
    })
    return (
      <div>
        //2<br />
        <table>
          {list}
        </table>
      </div>
    )
  }
}

function App3_1() {
  const [workers, setWorkers] = useState([
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
    { surname: "Паскар", name: "Антон", salary: 5000, sex: "чоловік" },
    { surname: "Попов", name: "Іван", salary: 6000, sex: "чоловік" },
    { surname: "Дяків", name: "Максим", salary: 5000, sex: "чоловік" },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [workersPerPage] = useState(10)
  const lastWorkerIndex = currentPage * workersPerPage;
  const firstWorkerIndex = lastWorkerIndex - workersPerPage;
  const currentWorker = workers.slice(firstWorkerIndex, lastWorkerIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(workers.length / workersPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <div>
      //3_1<br />
      <table>
        {
          currentWorker.map((item, index) => {
            return <tr key={index}>
              <td>
                {item.surname}
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.salary}
              </td>
            </tr>
          })
        }
      </table><br />
      <ul>
        {
          pageNumbers.map((item, index) => {
            return <li key={index}>
              <a href="!#" onClick={() => paginate(item)}>
                {item}
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

class App4 extends React.Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      selectInput: -1,
      output: "",
      input: "",
    }
  }

  changeInput = (event) => {
    this.setState({ input: event.target.value })
  }

  addCiti = (event) => {
    var cities = this.state.cities.slice();
    cities.push(this.state.input);
    this.setState({ cities: cities })
  }

  changeSelect = (event) => {
    this.setState({ selectInput: Number(event.target.value) })
  }

  render() {

    return (
      <div>
        //4<br />
        <input type="text" value={this.state.input} onChange={this.changeInput} />
        <input type="button" value="Додати" onClick={this.addCiti} />
        <br />
        <select onChange={this.changeSelect}>
          {

            this.state.cities.map((item, index) => {
              return <option key={index} value={index}>
                {item}
              </option>
            })
          }
        </select>
        <br />
        <p>
          {this.state.selectInput != -1 ? this.state.cities[this.state.selectInput] : ""}
        </p>
      </div>
    )
  }
}

class App5 extends React.Component {
  constructor() {
    super()
    this.state = {
      exchangeRates: [
        { name: "USD", price: 1 },
        { name: "UAH", price: 29.45 },
        { name: "EUR", price: 0.91 }
      ],
      selectValue1: 0,
      selectValue2: 0,
      input: 1,
      output: 1
    }
  }

  changeSelectValue1 = (event) => {
    this.setState({ selectValue1: Number(event.target.value) })
  }

  changeSelectValue2 = (event) => {
    this.setState({ selectValue2: Number(event.target.value) })
  }

  changeInput = (event) => {
    this.setState({ input: Number(event.target.value) })
  }

  eventOutput = () => {
    var output;
    if (this.state.exchangeRates[this.state.selectValue1].name === this.state.exchangeRates[this.state.selectValue2].name) {
      output = this.state.input;
    } else {
      if (this.state.exchangeRates[this.state.selectValue1].name != "USD") {
        var z = this.state.exchangeRates[this.state.selectValue1].price * this.state.input;
        output = ((z / this.state.exchangeRates[this.state.selectValue2].price) * 100) / 100;
      } else {
        output = ((this.state.input * this.state.exchangeRates[this.state.selectValue2].price) * 100) / 100;
      }
    }
    this.setState({ output: output })
  }

  render() {

    return (
      <div>
        //5<br />
        <select value={this.state.selectValue1} onChange={this.changeSelectValue1}>
          {
            this.state.exchangeRates.map((item, index) => {
              return <option value={index} key={index}>
                {item.name}
              </option>
            })
          }
        </select>
        <input type="text" value={this.state.input} onChange={this.changeInput} />
        <br />
        <select value={this.state.selectValue2} onChange={this.changeSelectValue2}>
          {
            this.state.exchangeRates.map((item, index) => {
              return <option value={index} key={index}>
                {item.name}
              </option>
            })
          }
        </select>
        <span>
          {this.state.output}
        </span>
        <br />
        <input type="button" value="Обрахувати" onClick={this.eventOutput} />
      </div>
    )
  }
}

class App6 extends React.Component {
  constructor() {
    super()
    this.state = {
      test: [
        {
          question: 'Питання 1',
          answers: [
            'Відповідь1',
            'Відповідь2',
            'Відповідь3',
            'Відповідь4',
            'Відповідь5',
          ],
          right: 3, //номер правильної відповіді
          reply: -1,
          bgColor: ""
        }, {
          question: 'Питання 2',
          answers: [
            'Відповідь1',
            'Відповідь2',
            'Відповідь3',
            'Відповідь4',
            'Відповідь5',
          ],
          right: 1, //номер правильної відповіді
          reply: -1,
          bgColor: ""
        },
      ]
    }
  }

  changeRadio = (event, index) => {
    var list = this.state.test.slice()
    list[index].reply = Number(event.target.value)
    this.setState({ test: list })
  }

  handlerAndswer = (index) => {
    var list = this.state.test.slice()
    if (list[index].reply != -1) {
      if (list[index].reply + 1 == list[index].right) {
        list[index].bgColor = "colorStyleGreen"
      } else {
        list[index].bgColor = "colorStyleRed"
      }
      this.setState({ test: list })
    }
  }

  render() {

    return (
      <div>
        //6<br />
        {
          this.state.test.map((item, index) => {
            return <div key={String(index) + "q"} className={item.bgColor}>
              {item.question}
              <br />
              {
                item.answers.map((p, i) => {
                  return <label key={String(i) + "a"}>
                    <input name={"radio" + String(index)}
                      type="radio" value={i} checked={item.reply == i}
                      onChange={(e) => this.changeRadio(e, index)} />
                    {p}
                    <br />
                  </label>
                })
              }
              <br />
              <input type="button" value="Відповісти" onClick={() => this.handlerAndswer(index)} />
            </div>
          })
        }
      </div>
    )
  }
}





ReactDOM.render(
  <React.StrictMode>
    <App1 /><br />
    <App2 /><br />
    <App3_1 /><br />
    <App4 /><br />
    <App5 /><br />
    <App6 /><br />
  </React.StrictMode>,
  document.getElementById('root')
);