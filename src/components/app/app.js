import { Component } from "react";

//! Сюда всі компоненти імпортуватиму

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

//! Забронона КОПІЮВАННЯ тексту і заміна на свій
document.addEventListener("copy", (evt) => {
  evt.clipboardData.setData("text/plain", "Пішов в СРАКУ");
  evt.preventDefault();
}, false);
//------

class App extends Component {
  //! Імітую данні ніби вони прийшли з сервера
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Arthur A.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Natalia A.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "RomaSS A.", salary: 1500, increase: false, rise: false, id: 3 },
      ], 

      term: '',  //! Потрібно для фільтрації

      filter: 'all' //! Показую працівників, які йдуть на підвищення

    };

    this.maxId = 4; //! для добавлення до користувача ID
  }


//! Створив метод видалення користувача
  deleteItem = (id) => {
    // Цей метод передається АЖ ДО САМОЇ КНОПКИ
    this.setState(({ data }) => {
      return {
        data: data.filter( item => item.id !==id) //фільтрує і видає значення котре НЕ співпадає з клікнутим ID 
      }
    });
  };

//! Добавлення нового працівника
  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

//! Метод виділення ДЛЯ ПРЕМІЇ працівника. переключення. Печенько
  onToggleIncrease = (id) => {
      this.setState(({data}) => ({ 
        data: data.map(item => {
          if (item.id === id) {
            return {...item, increase: !item.increase}
          }
          return item;
        })
      }))
  }


//! Метод виділення ДЛЯ ПОВИШЕННЯ працівника. переключення 
  onToggleRise = (id) => {
    this.setState(({data}) => ({ 
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }))
  }


  // //! Обєдную дві Ф-Ї в одну
  // onToggleProperty = (id, prop) => {
  //   this.setState(({data}) => ({
  //       data: data.map(item => {
  //           if (item.id === id) {
  //               return {...item, [prop]: !item[prop]}
  //           }
  //           return item;
  //         })
  //       }));
  //   }


 //! Функція пошуку!!!!!
  searchEmp = (items, term) => {
    if (term.length === 0) {  //! Перевірка: Якщо НЕ введено жодного  символу
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1  //! Фільтрування по будь-яких символах
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});
  }


//! Фільтрація на підвищення
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise); //! якщо RISE - true тоді фільтр відбувається
      case 'more1000$':
        return items.filter(item => item.salary > 1000);
        default:
          return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }
  render() {

    //! Вивід інформації на сторінку. К-ть працівників
    const { data, term, filter } = this.state;


    const totalEmployees = data.length; //! для лічильника

    const employeesIncreast = data.filter((employee) => employee.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter); //! ОБЄДНАВ ФІЛЬТР І ПОШУК. Комбінований результат пошуку і фільтру
   


//----------
    return (
      <div className="app">
        <AppInfo 
          totalEmployees={totalEmployees} 
          employeesIncreast={employeesIncreast}
        />

        <div className="search-panel">
          <SearchPanel 
            onUpdateSearch={this.onUpdateSearch} //! Відповідає за встановлення данних в TERM 
          />  
          <AppFilter 
             filter={filter} onFilterSelect={this.onFilterSelect}
          />
        </div>

        <EmployeesList
          data={visibleData} //! Передаю данні з Data
          onDelete={this.deleteItem} //! Передаю метод
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
