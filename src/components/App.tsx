import * as React from "react";

export interface AppProps {
	text?: string,
}

export const AppProps = undefined;

const App: React.FC<AppProps> = ({ text}: AppProps) => {
	return (
		<p>{text || "No text"}</p>
	);
};

export default App;

