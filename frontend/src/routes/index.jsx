import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import Chat from "@/pages/chat";
import Index from "@/pages/index";
import MalhaCicloviaria from "@/pages/malha-cicloviaria";
import MonitoramentoMeteorologico from "@/pages/monitoramento-meteorologico";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/chat/:message?" element={<Chat />} />
				<Route
					path="/monitoramento-meteorologico"
					element={<MonitoramentoMeteorologico />}
				/>
				<Route path="/malha-cicloviaria" element={<MalhaCicloviaria />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
