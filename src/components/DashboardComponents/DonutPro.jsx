import React from "react";
import styled from "styled-components";
import DonutChart from "react-donut-chart";

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
	}
    .donut {
        position: relative;
        height: 100%;
    }
    .donutchart {
        width: 100% !important;
        height: 100% !important;
    }
    .text-div {
        position: absolute;
        top: 47%;
        left: 34%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .heading {
        color: #001B33;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        text-align: left;
        align-self: flex-start;
    }
    .center-text {
        line-height: 20px;
        text-align: center;
    }
    .number {
        color: #001B33;
        font-size: 50px;
        font-weight: 500;
        line-height: 50px;
    }
`
);

function DonutPro() {
	const colors = [
		"#F9E6E2",
		"#F5D3D1",
		"#F1BDC1",
		"#ECA0B3",
		"#E57CA5",
		"#D55A9A",
		"#BB3B8A",
		"#9A277D",
		"#781C74",
		"#551469",
	];
	const donutData = [
		{
			label: "Gearbox oil change",
			value: 12,
		},
		{
			label: "Fuel indicator issue",
			value: 16,
			// isEmpty: true,
		},
		{
			label: "Electronics glitches",
			value: 12,
		},
		{
			label: "Tyres replacement",
			value: 21,
		},
		{
			label: "Shock change",
			value: 16,
		},
		{
			label: "Engine Oil change",
			value: 15,
		},
		{
			label: "Brake hydraulic issue",
			value: 21,
		},
		{
			label: "Engine clutch issue",
			value: 14,
		},
		{
			label: "Brake disc worn out",
			value: 22,
		},
		{
			label: "Steering issues",
			value: 18,
		},
	];
	return (
		<StyledCardWrapper>
			<div className="element-wrapper">
				<p className="heading">Top 10 Most Frequent Failures</p>
				<div className="donut">
					<DonutChart
						colors={colors}
						data={donutData}
						interactive={false}
					></DonutChart>
					<div className="text-div">
						<p className="number">167</p>
						<p className="heading center-text">Total Failures</p>
					</div>
				</div>
			</div>
		</StyledCardWrapper>
	);
}

export default DonutPro;
