import React from "react";
import styled from "styled-components";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
		},
		title: {
			display: false,
			text: "",
		},
	},
};

const labels = [
	"TATA 1918.K",
	"Tata Hyva 2518",
	"TATA LPK 3118",
	"TATA Prima 2518",
	"Tata 5530.S",
	"Tata FL 5589",
	"TATA 2456",
	"Site 8",
];

export const data = {
	labels,
	datasets: [
		{
			label: "Cost(INR)",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			backgroundColor: "#5575A2",
		},
		{
			label: "No. of Breakdowns",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			backgroundColor: "#E39142",
		},
		{
			label: "Fuel Consumption",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			backgroundColor: "#CF605C",
		},
	],
};

const StyledCardWrapper = styled("div")(
	() => `
	display: flex;
	height: 100%;
    align-items: center;
    padding: 20px 10px;
	.element-wrapper {
		display: flex;
        flex-direction: column;
		align-items: center;
		border: 1px solid #D9D9D9;
		border-radius: 20px;
		margin: 0 10px;
		padding: 15px 40px;
		width: 100%;
        height: 100%;
        position: relative;
	}
    .legend-box {
        display: flex;
    }
    .text-div {
        display: flex;
        font-weight: 500;
        color: #001B33;
        margin-left: 20px;
    }
    .red {
        color: #CF605C;
    }
    .bold {
        font-weight: 800;
    }
    .legend {
        margin: 0 10px;
    }
    .bar {
        position: relative;
    }
    .axis {
        position: absolute;
    }
    .vertical {
        bottom: 50%;
        left: 0;
        transform: rotateZ(270deg);
    }
    .horizontal {
        bottom: 0;
        left: 120px;
    }

`
);

function BarChart() {
	return (
		<StyledCardWrapper>
			<div className="element-wrapper">
				<div className="legend-box">
					<div className="text-div">
						<p className="legend">Total Permits Made</p>
						<p className="red legend bold">89 </p>
						<p className="red legend">10% </p>
						<ArrowCircleUpIcon className="red" />
					</div>
					<div className="text-div">
						<p className="legend">Avg PTW Downtime</p>
						<p className="red legend bold">25mins </p>
						<p className="red legend">18% </p>
						<ArrowCircleUpIcon className="red legend" />
					</div>
				</div>
				<Bar options={options} data={data} className="bar-graph" />
				<p className="legend vertical axis">Quantity</p>
				<p className="legend horizontal axis">Permits Made</p>
			</div>
		</StyledCardWrapper>
	);
}

export default BarChart;
