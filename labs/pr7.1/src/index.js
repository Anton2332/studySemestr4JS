import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
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
      inputSalary: null,
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
    this.setState(state => {
      const list = state.workers;

      console.log(list + "  ")
    })
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
      return <option value={index}>{item}</option>
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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
