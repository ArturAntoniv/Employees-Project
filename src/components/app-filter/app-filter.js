
import './app-filter.css'


const AppFilter = (props) => {

const buttonsData = [     //! Це роблю для практики і для зручності. вИКОРИСТОВУЙ коли БАГАТО КНОПОК
	{name: 'all', label: 'Всі працівники'},
	{name: 'rise', label: 'На підвищення'},
	{name: 'more1000$', label: 'З/П більше 1000$'},
]

const buttons = buttonsData.map(({name, label}) => {

	const active = props.filter === name;  //! Визначаю  true or false
	const clazz = active ? 'btn-light' : 'btn-outline-light'; //! взнаю який класс і передаю в button

	return (
		<button type="button"
				className={`btn ${clazz}`} //! Цей код замінить розмітку нижче
				key = {name}
				onClick={() => props.onFilterSelect(name)}>			
					{label}
		</button>
	)
})
	
	return (
		<div className="btn-group">
			{buttons}
			{/* <button 
				className="btn btn-light"
				type="button">
					Всі працівники
			</button>
			<button 
				className="btn btn-outline-light"
				type="button"
				
				>
					На підвищення
			</button>
			<button 
				className="btn btn-outline-light"
				type="button">
					З/П більше 1000$
			</button> */}
		</div>
	);
}

export default AppFilter;