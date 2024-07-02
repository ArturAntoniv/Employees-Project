
import { Component } from 'react';

// import './employees-add-form.css';

//! підключив SCSS
import './employees-add-form.scss';

class EmployeesAddForm extends Component {



    //! Роблю ОДИН метод для двох імпутів вводу
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value    //! таким чином можна записати властивість в обєкт
        })
    }

// ! Добавляю нових працівників

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    //! Роблю добавлення НОВОГО працівника
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    render () {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавляю нового працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit} //! підключив Добавлення працівника
                    >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його імя?" 

                        onChange={this.onValueChange}
                        name= "name"        //! Полетить інфа в [e.target.name]
                        value={name}        //! 
                    />   
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 

                        onChange={this.onValueChange}
                        name= "salary"      //! Полетить інфа в [e.target.name]  
                        value={salary}
                    />    
    
                    <button type="submit"
                            className="btn btn-outline-light" >Добавити</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;