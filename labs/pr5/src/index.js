import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
    }
  }
  chageInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }
  render() {
    return (
      <div>
        //1<br />
        <textarea value={this.state.inputValue} onChange={this.chageInputValue} />
        <div>{this.state.inputValue}</div>
      </div>
    )
  }
}

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: true
    }
  }
  chageInputValue = (event) => {
    this.setState({ inputValue: event.target.checked })
  }
  render() {
    return (
      <div>
        //2<br />
        <input type="checkbox" checked={this.state.inputValue} onChange={this.chageInputValue} />
        {this.state.inputValue.toString()}
      </div>
    )
  }
}

class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Якийсь текст",
      checkboxValue: true,
    }
  }

  chageCheckboxValue = (event) => {
    this.setState({ checkboxValue: event.target.checked })
  }

  render() {

    return (
      <div>
        //3
        <br />
        <input type="checkbox" checked={this.state.checkboxValue} onChange={this.chageCheckboxValue} />
        <br />
        <div>
          {this.state.checkboxValue ? this.state.text : null}
        </div>
      </div>
    )
  }
}

class App4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectOptions: ["Volvo", "Saab", "Mercedes", "Audi"],
      value: 0,
    }
  }

  chageSelected = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    const list = this.state.selectOptions.map((item, index) => {
      return <option key={index} value={index} >{item}</option>
    })
    return (
      <div>
        //4<br />
        <select value={this.state.value} onChange={this.chageSelected}>
          {list}
        </select>
        <div>{this.state.selectOptions[this.state.value]}</div>
      </div>
    )
  }
}

class App5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: "1"
    }
  }

  handleRadioChange = (event) => {
    this.setState({ option: event.target.value })
  }

  render() {

    return (
      <div>
        //5<br />
        <label>
          <input
            name="radiobutton"
            id="radiobutton1"
            type="radio"
            value="1"
            checked={this.state.option == '1'}
            onChange={this.handleRadioChange} />
          1</label>
        <br />
        <label>
          <input
            name="radiobutton"
            id="radiobutton2"
            type="radio"
            value="2"
            checked={this.state.option == '2'}
            onChange={this.handleRadioChange} />
          2</label>
        <br />
        <label>
          <input
            name="radiobutton"
            id="radiobutton3"
            type="radio"
            value="3"
            checked={this.state.option == '3'}
            onChange={this.handleRadioChange} />
          3</label>
        <br />
        <div>
          {this.state.option}
        </div>
      </div>
    )
  }

}

class App6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      texts: []
    }
  }

  chageInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  chageTextsArray = () => {
    this.setState(state => {
      const list = state.texts.push(state.inputValue)
      state.inputValue = ""
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.texts.map((item, index) => {
      return <div key={index}>{item}</div>
    })
    return (
      <div>
        //6<br />
        <textarea value={this.state.inputValue} onChange={this.chageInputValue} /><br />
        <input type="button" onClick={this.chageTextsArray} value="button" />
        {list}
      </div>
    )
  }

}

class App7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectOptions: ["red", "blue", "black", "white"],
      value: 0,
    }
  }

  chageSelected = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const list = this.state.selectOptions.map((item, index) => {
      return <option key={index} value={index} >{item}</option>
    })
    let cssStyle = {
      backgroundColor: "red"
    }
    return (
      <div>
        //7<br />
        <select value={this.state.value} onChange={this.chageSelected}>
          {list}
        </select>
        <div className={this.state.selectOptions[this.state.value]}>Random text</div>
      </div>
    )
  }
}

class App8 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: false,
    }
  }

  chageInputValue = (event) => {
    this.setState({ inputValue: event.target.checked })
  }
  chageInputValueSelect = (event) => {
    this.setState({ inputValue: event.target.value == "true" })
  }

  render() {
    return (
      <div>
        //8<br />
        <input type="checkbox" checked={this.state.inputValue} onChange={this.chageInputValue} />
        <select value={this.state.inputValue} onChange={this.chageInputValueSelect}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
    )
  }

}

class App9 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // selectOptions: [
      //   { name: "Абзац 1", text: "Текст абзацу 1" },
      //   { name: "Абзац 2", text: "Текст абзацу 2" },
      //   { name: "Абзац 3", text: "Текст абзацу 3" },
      // ],
      value: 0,
      selectOptions: [
        "Абзац 1", "Абзац 2", "Абзац 3"
      ]
      ,
      selectTexts: [
        "Текст 1", "Текст 2", "Текст 3"
      ]
    }
  }

  chageSelected = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const list = this.state.selectOptions.map((item, index) => {
      return <option key={index} value={index} >{item}</option>
    })
    return (
      <div>
        //9<br />
        <select value={this.state.value} onChange={this.chageSelected}>
          {list}
        </select>
        <div>
          {this.state.selectTexts[this.state.value]}
        </div>
      </div>
    )
  }
}

class App10 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      optionArray: []
    }
  }

  chageInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  chageOptionArray = (event) => {
    this.setState(state => {
      const list = state.optionArray.push(state.inputValue)
      state.inputValue = ""
      return {
        list,
      }
    })
  }

  render() {
    const list = this.state.optionArray.map((item, index) => {
      return <option key={index} value={index}>{item}</option>
    })
    return (
      <div>
        //10<br />
        <input type="text" value={this.state.inputValue} onChange={this.chageInputValue} /><br />
        <input type="button" onClick={this.chageOptionArray} value="Button" /><br />
        <select>
          {list}
        </select>
      </div>
    )
  }
}

class App11 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: true,
    }
  }

  chageCheckboxValue = (event) => {
    this.setState({ value: event.target.checked })
  }

  render() {

    return (
      <div>
        //11<br />
        <input type="checkbox" value={this.state.value} onChange={this.chageCheckboxValue} />
        <input type="text" disabled={this.state.value} />
      </div>
    )
  }
}

class App12 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      months: [
        "Січень", "Лютий", "Березень",
        "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень",
        "Жовтень", "Листопад", "Грудень"
      ],
      days: [],
      years: [],
      weeks: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота"]
    }
    let i = 1
    while (i < 32) {
      this.state.days.push(i)
      i++
    }
    i = 1950
    while (i < 2041) {
      this.state.years.push(i)
      i++
    }
  }

  chageMonth = (event) => {
    this.setState((state) => {
      var date = state.date
      date.setMonth(Number(event.target.value))
      return {
        date,
      }
    })
  }

  chageDay = (event) => {
    this.setState((state) => {
      var date = state.date
      date.setDate(Number(event.target.value) + 1)
      return {
        date,
      }
    })
  }

  chageYear = (event) => {
    this.setState((state) => {
      var date = state.date
      date.setFullYear(Number(event.target.value))
      return {
        date,
      }
    })
  }

  render() {
    const list = this.state.months.map((item, index) => {
      return <option key={index} value={index}>{item}</option>
    })
    const list2 = this.state.days.map((item, index) => {
      return <option key={index} value={index}>{item}</option>
    })
    const list3 = this.state.years.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
    })
    return (
      <div>
        //12<br />
        <select value={(this.state.date.getDate() - 1).toString()} onChange={this.chageDay}>
          {list2}
        </select>
        <select value={this.state.date.getMonth().toString()} onChange={this.chageMonth}>
          {list}
        </select>
        <select value={this.state.date.getFullYear().toString()} onChange={this.chageYear}>
          {list3}
        </select>


        <br />
        {this.state.weeks[this.state.date.getDay()]}
      </div>
    )
  }
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
    <App11 /><br />
    <App12 />
  </React.StrictMode>,
  document.getElementById('root')
);
