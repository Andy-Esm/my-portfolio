declare module '*.scss';
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}
declare module '*.jpg' {
	const value: string;
	export default value;
}
