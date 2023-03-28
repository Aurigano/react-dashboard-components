import React from "react";
import styled from "styled-components";

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
`
);

function Graphs() {
	return (
		<StyledCardWrapper>
			<div className="element-wrapper">BarChart</div>
			<div className="element-wrapper">BarChart</div>
			<div className="element-wrapper">BarChart</div>
			<div className="element-wrapper">BarChart</div>
		</StyledCardWrapper>
	);
}

export default Graphs;
