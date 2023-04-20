import './MyApp.css';

const MyApp = () => {
	return (
		<>
			<section className="main">
				<div className="card container">
					<div className="row date-container container">
						<div className="col date-month-year">
							<span className="date">12</span>
							<span className="month-year">
								Jan<p>2022</p>
							</span>
						</div>
						<div className="col">
							<span className="day">Tuesday</span>
						</div>
					</div>
					<button className="plus">
						<div className="add">
							<p>+</p>
						</div>
					</button>
					<div className="todo-container">
						<div className="todo">
							<div className="todo-list">
								<span>Go To Gym!</span>
								<input type="radio" name="" id="" />
							</div>
							<div className="todo-list">
								<span>Go To Gym!</span>
								<input type="radio" name="" id="" />
							</div>
							<div className="todo-list">
								<span>Go To Gym!</span>
								<input type="radio" name="" id="" />
							</div>
							<div className="todo-list">
								<span>Go To Gym!</span>
								<input type="radio" name="" id="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MyApp;
