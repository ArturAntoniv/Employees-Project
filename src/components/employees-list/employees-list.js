

import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {

    const elements = data.map(item => {      //! Методом MAP перебрав ВСІ данні які приходять з сервера і відрендерив іх. ДИНАМІЧНО

        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>, // Це такий самий код як  і нижче але довгий
            <EmployeesListItem
                key={id} 
                {...itemProps}
                onDelete = {() => onDelete(id)} //! СТВОРИВ метод видалення!!!!! ЗВЯЗАВ його з employees-list-item!!!!

                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
            /> 
        )
    })       

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;