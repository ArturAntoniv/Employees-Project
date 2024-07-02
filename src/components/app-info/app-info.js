
import './app-info.css';

const AppInfo = ( {totalEmployees, employeesIncreast }) => {
	return (
		<div className="app-info">
			<h1>Облік співробітників</h1>
			<h2>Загальне число працівників:  {totalEmployees}</h2>
			<h2>Премію отримають: {employeesIncreast}</h2>
		</div>
	)
}

export default AppInfo;