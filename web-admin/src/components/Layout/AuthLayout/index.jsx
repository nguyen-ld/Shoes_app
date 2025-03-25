import Login from "./Login";
import ForgotPassword from "./ForgorPassword";

function MainLayout({ children }) {
	return (
		<div>
			<div className="container">
				<Login />
				<ForgotPassword />
			</div>
		</div>
	);
}

export default MainLayout;
