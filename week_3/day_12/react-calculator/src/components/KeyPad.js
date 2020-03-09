import React from "react";
import useKeys from "../utils/useKeys";
import Key from "../components/Key";

const KeyPad = () => {
	const keys = useKeys()
	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
			{keys.map((key) => {
			return <Key data={key} />
			})}
			</div>
		</div>
	);
};

export default KeyPad;