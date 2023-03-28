import React from "react";
import styled from "styled-components";
import CarouselComponent from "./DashboardComponents/CarouselComponent";
import MiniDonuts from "./DashboardComponents/MiniDonuts";
import Graphs from "./DashboardComponents/Graphs";
import BarChart from "./DashboardComponents/BarChart";
import DonutPro from "./DashboardComponents/DonutPro";
import Calendar from "./DashboardComponents/Calendar";

const StyledDiv = styled("div")(
	() => `
	height: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 200px 160px 150px repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	background-color: #FCFCFC;
	
	.div1 { grid-area: 1 / 1 / 2 / 4; }
	.div2 { grid-area: 2 / 1 / 3 / 4; }
	.div3 { grid-area: 3 / 1 / 4 / 4; }
	.div4 { grid-area: 4 / 1 / 6 / 4; }
	.div5 { grid-area: 4 / 4 / 6 / 6; }
	.div6 { grid-area: 1 / 4 / 4 / 6; }
`
);

function Dashboard() {
	return (
		<StyledDiv>
			<div className="div1">
				<CarouselComponent />
			</div>
			<div className="div2">
				<MiniDonuts />
			</div>
			<div className="div3">
				<Graphs />
			</div>
			<div className="div4">
				<BarChart />
			</div>
			<div className="div5">
				<DonutPro />
			</div>
			<div className="div6">
				<Calendar />
			</div>
		</StyledDiv>
	);
}

export default Dashboard;
