

import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} =props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" 
                onClick= {onToggleRise}
                style={{fontSize: '3em', animation: 'move 1.15s ease-in 0s infinite alternate paused none'}}
                >
                {/*//! Повісив обробник подій і підключив метод */}
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>{/* //!  PROPS додаю ЗП і імя працівника  */}
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie" 
                        onClick={onToggleIncrease}>   {/*//! Повісив обробник подій і підключив метод */}
                            </i> {/* //! ПЕЧЕНЬКА*/}
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete} //! Обробник з методом видалення
                >
                    <i className="fas fa-trash"></i> {/* //! Сміття*/}
                </button>
                <i className="fas fa-star"></i> 
            </div>
        </li>
    )

}

export default EmployeesListItem;