import { BrowserRouter, Routes, Route } from "react-router-dom";
import Areas from "./components/Areas";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Reports from "./components/Reports";
import Users from "./components/Users";
import WorkPermits from "./components/WorkPermits";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route
					path="/signup"
					element={<LoginWrapper page="signup" />}
				/>
				<Route path="/login" element={<LoginWrapper page="login" />} /> */}
				<Route path="/" element={<Home />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="work-permits" element={<WorkPermits />} />
					<Route path="areas" element={<Areas />} />
					<Route path="projects" element={<Projects />} />
					<Route path="users" element={<Users />} />
					<Route path="reports" element={<Reports />} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
