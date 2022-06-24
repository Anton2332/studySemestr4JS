import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr1: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      arr2: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      arr3: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      arr4: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      inputValue5: "",
      inputValue6: "",
      inputValue7: null,
      input1Value8: "",
      input2Value8: "",
      input3Value8: "",
      inputValue9: "",
      outputValue9: "",
      input1Value10: null,
      input2Value10: null,
      outputValue10: null,
      input1Value11: "",
      input2Value11: "",
      input3Value11: "",
      outputValue11: "",
      inputValue12: "",
      arr12: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      inputValue13: "",
      arr13: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],
      hrefs14: [
        { href: '1.html', text: 'посилання 1' },
        { href: '2.html', text: 'посилання 2' },
        { href: '3.html', text: 'посилання 3' },
      ],
      input1Value14: "",
      input2Value14: "",
      inputValue15: "",
      arr15: ["Коля", "Вася", "Петя", "Іван", "Дмитро"],

      input1Value16: "",
      input2Value16: "",
      users16: [
        { name: 'Коля', age: 30 },
        { name: 'Василь', age: 40 },
        { name: 'Петро', age: 50 },
      ]

    }
  }

  chageArr2 = () => {
    this.setState(state => {
      const list = state.arr2.push("пункт");
      return {
        list,
      };
    });
  }

  chageArr3 = () => {
    this.setState(state => {
      const list = state.arr3.pop()
      return {
        list,
      }
    })
  }
  chageArr4Item = (index) => {
    this.setState(state => {
      let list = state.arr4
      list.splice(index, 1)
      return {
        list,
      }
    })
  }

  chageInputValue5 = (event) => {
    this.setState({ inputValue5: event.target.value })
  }

  chageInputValue6 = (event) => {
    this.setState({ inputValue6: event.target.value })
  }
  chageInputValue7 = (event) => {
    const year = new Date().getFullYear()
    this.setState({ inputValue7: year - Number(event.target.value) })
  }

  chageInputValue8 = (event) => {
    const arr = event.target.value.split(" ")
    if (arr.length === 1) {
      this.setState({ input1Value8: arr[0] })
    }
    else if (arr.length === 2) {
      this.setState({
        input1Value8: arr[0],
        input2Value8: arr[1],
      })
    }
    else if (arr.length === 3) {
      this.setState({
        input1Value8: arr[0],
        input2Value8: arr[1],
        input3Value8: arr[2],
      })
    }
  }

  chageInputValue9 = (event) => {
    this.setState({ inputValue9: event.target.value })
  }

  chageOutputValue9 = () => {
    this.setState({ outputValue9: this.state.inputValue9 })
  }

  chageInput1Value10 = (event) => {
    this.setState({ input1Value10: Number(event.target.value) })
  }

  chageInput2Value10 = (event) => {
    this.setState({ input2Value10: Number(event.target.value) })
  }

  chageOutputValue10 = () => {
    this.setState({ outputValue10: this.state.input1Value10 + this.state.input2Value10 })
  }

  chageInput1Value11 = (event) => {
    this.setState({ input1Value11: event.target.value })
  }

  chageInput2Value11 = (event) => {
    this.setState({ input2Value11: event.target.value })
  }

  chageInput3Value11 = (event) => {
    this.setState({ input3Value11: event.target.value })
  }

  chageOutputValue11 = () => {
    this.setState({ outputValue11: this.state.input1Value11 + " " + this.state.input2Value11 + " " + this.state.input3Value11 })
  }

  chageInputValue12 = (event) => {
    this.setState({ inputValue12: event.target.value })
  }

  chageArr12 = () => {
    this.setState(state => {
      const list = state.arr12.push(this.state.inputValue12);
      this.state.inputValue12 = ""
      return {
        list,
      };
    });
  }

  chageInputValue13 = (event) => {
    this.setState({ inputValue13: event.target.value })
  }

  chageArr13 = () => {
    this.setState(state => {
      const list = state.arr13.push(this.state.inputValue13);
      this.state.inputValue13 = ""
      return {
        list,
      };
    });
  }

  chageArr13Item = (index) => {
    this.setState(state => {
      let list = state.arr13
      list.splice(index, 1)
      return {
        list,
      }
    })
  }

  chageInput1Value14 = (event) => {
    this.setState({ input1Value14: event.target.value })
  }

  chageInput2Value14 = (event) => {
    this.setState({ input2Value14: event.target.value })
  }

  chageArr14 = () => {
    this.setState(state => {
      const list = state.hrefs14.push({ href: state.input1Value14, text: state.input2Value14 });
      state.input1Value14 = ""
      state.input2Value14 = ""
      return {
        list,
      };
    });
  }

  chageInputValue15 = (event) => {
    this.setState({ inputValue15: Number(event.target.value) })
  }

  chageArr15Item = () => {
    this.setState(state => {
      let list = state.arr15
      list.splice(state.inputValue15 - 1, 1)

      return {
        list,
      }
    })
  }

  chageInput1Value16 = (event) => {
    this.setState({ input1Value16: event.target.value })
  }

  chageInput2Value16 = (event) => {
    this.setState({ input2Value16: event.target.value })
  }

  chageOutputValue16 = () => {
    this.setState(state => {
      const list = state.users16.push({ name: state.input1Value16, age: Number(state.input2Value16) });
      state.input1Value16 = ""
      state.input2Value16 = ""
      return {
        list,
      };
    });
  }



  render() {
    const list1 = this.state.arr1.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })
    const list2 = this.state.arr2.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })
    const list3 = this.state.arr3.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })

    const list4 = this.state.arr4.map((item, index) => {
      return <li key={index}>
        {item} <button onClick={() => this.chageArr4Item(index)}>Видалити</button>
      </li>
    })

    const list12 = this.state.arr12.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })

    const list13 = this.state.arr13.map((item, index) => {
      return <li key={index}>
        {item} <button onClick={() => this.chageArr13Item(index)}>Видалити</button>
      </li>
    })

    const list14 = this.state.hrefs14.map((item, index) => {
      return <li href={item.href} key={index}>
        {item.text}
      </li>
    }
    )

    const list15 = this.state.arr15.map((item, index) => {
      return <li key={index}>
        {item}
      </li>
    })

    const list16 = this.state.users16.map((item, index) => {
      return <tr key={index}>
        <td>{item.name}</td><td>{item.age}</td>
      </tr>
    })

    return (
      <div>
        //1
        <ul>
          {list1}
        </ul>
        //2
        <ul>
          {list2}
        </ul>
        <button onClick={this.chageArr2}>
          кнопка
        </button>
        //3
        <ul>
          {list3}
        </ul>
        <button onClick={this.chageArr3}>
          кнопка
        </button>
        //4
        <ul>
          {list4}
        </ul>

        //5
        <div>
          <div>
            {this.state.inputValue5}
          </div>
          <input type="text" value={this.state.inputValue5} onChange={this.chageInputValue5} />
        </div>
        //6
        <div>
          <div>
            {this.state.inputValue6.toUpperCase()}
          </div>
          <input type="text" value={this.state.inputValue6} onChange={this.chageInputValue6} />
        </div>
        //7
        <div>
          <div>
            {this.state.inputValue7}
          </div>
          <input type="text" onChange={this.chageInputValue7} />
        </div>
        //8
        <div>
          <div>
            {this.state.input1Value8}
          </div>
          <div>
            {this.state.input2Value8}
          </div>
          <div>
            {this.state.input3Value8}
          </div>
          <input type="text" onChange={this.chageInputValue8} />
        </div>

        //9
        <div>
          <div>
            {this.state.outputValue9}
          </div>
          <input type="text" onChange={this.chageInputValue9} /><br />
          <input type="submit" onClick={this.chageOutputValue9} />
        </div>

        //10
        <div>
          <input type="text" onChange={this.chageInput1Value10} /><br />
          <input type="text" onChange={this.chageInput2Value10} /><br />
          <input type="submit" onClick={this.chageOutputValue10} />
          <div>
            {this.state.outputValue10}
          </div>
        </div>

        //11
        <div>
          <input type="text" onChange={this.chageInput1Value11} /><br />
          <input type="text" onChange={this.chageInput2Value11} /><br />
          <input type="text" onChange={this.chageInput3Value11} /><br />
          <input type="submit" onClick={this.chageOutputValue11} />
          <div>
            {this.state.outputValue11}
          </div>
        </div>

        //12
        <div>
          <ul>
            {list12}
          </ul>
          <input type="text" value={this.state.inputValue12} onChange={this.chageInputValue12} /><br />
          <input type="submit" onClick={this.chageArr12} />
        </div>

        //13
        <div>
          <ul>
            {list13}
          </ul>
          <input type="text" value={this.state.inputValue13} onChange={this.chageInputValue13} /><br />
          <input type="submit" onClick={this.chageArr13} />
        </div>

        //14
        <div>
          <ul>
            {list14}
          </ul>
          <input type="text" value={this.state.input1Value14} onChange={this.chageInput1Value14} /><br />
          <input type="text" value={this.state.input2Value14} onChange={this.chageInput2Value14} /><br />
          <input type="submit" onClick={this.chageArr14} />
        </div>

        //15
        <div>
          <ul>
            {list15}
          </ul>
          <input type="text" onChange={this.chageInputValue15} /><br />
          <input type="submit" onClick={this.chageArr15Item} />
        </div>

        //16
        <div>
          <table>
            {list16}
          </table>
          <input type="text" value={this.state.input1Value16} onChange={this.chageInput1Value16} /><br />
          <input type="text" value={this.state.input2Value16} onChange={this.chageInput2Value16} /><br />
          <input type="submit" onClick={this.chageOutputValue16} />
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

