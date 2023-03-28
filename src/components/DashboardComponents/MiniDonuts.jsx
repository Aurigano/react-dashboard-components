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
		align-items: center;
		border: 1px solid #D9D9D9;
		border-radius: 20px;
		margin: 0 10px;
		padding: 15px 40px;
		width: 100%;
        height: 100%;
	}
    .mini-donut {
        height: 100%; 
        flex: 1;
        border-left: 1px solid #D9D9D9;
        :first-child {
            border: none;
        }
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
        top: 50%;
        left: 42%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .heading {
        color: #001B33;
        font-size: 7px;
        font-weight: 500;
        line-height: 30px;
        // text-align: left;
        // align-self: flex-start;
    }
    .center-text {
        line-height: 7px;
        text-align: center;
    }
    .number {
        color: #001B33;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
    }
`
);

function MiniDonuts() {
	const colors1 = ["#BB3B8A", "#9A277D", "#781C74"];
	const colors2 = ["#BB3B8A", "#D55A9A", "#E57CA5"];
	const colors3 = ["#5256B8", "#787AC4", "#A8AAD6"];

	const donutData1 = [
		{
			label: "Operational",
			value: 7,
		},
		{
			label: "Mechanical",
			value: 67,
		},
		{
			label: "Electrical",
			value: 26,
		},
	];
	const donutData2 = [
		{
			label: "Hot work",
			value: 7,
		},
		{
			label: "work at height",
			value: 67,
		},
		{
			label: "confined space",
			value: 26,
		},
	];
	const donutData3 = [
		{
			label: "Created",
			value: 7,
		},
		{
			label: "Isolated",
			value: 67,
		},
		{
			label: "WIP",
			value: 26,
		},
	];
	return (
		<StyledCardWrapper>
			<div className="element-wrapper">
				<div className="mini-donut">
					<div className="donut">
						<DonutChart
							colors={colors1}
							data={donutData1}
							interactive={false}
						></DonutChart>
						<div className="text-div">
							<p className="number">87%</p>
							<p className="heading center-text">By MM Team</p>
						</div>
					</div>
				</div>
				<div className="mini-donut">
					<div className="donut">
						<DonutChart
							colors={colors2}
							data={donutData2}
							interactive={false}
						></DonutChart>
						<div className="text-div">
							<p className="number">87%</p>
							<p className="heading center-text">Hot work</p>
						</div>
					</div>
				</div>
				<div className="mini-donut">
					<div className="donut">
						<DonutChart
							colors={colors3}
							data={donutData3}
							interactive={false}
						></DonutChart>
						<div className="text-div">
							<p className="number">87%</p>
							<p className="heading center-text">WIP</p>
						</div>
					</div>
				</div>
			</div>
		</StyledCardWrapper>
	);
}

export default MiniDonuts;
