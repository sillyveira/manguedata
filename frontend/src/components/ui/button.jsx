/* eslint-disable react/prop-types */
import seta from "@/assets/seta.png";

export default function Button({ text, onClick }) {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-full p-3 px-5 w-max whitespace-nowrap "
		>
			{text}
			<img src={seta} alt="Seta" className="h-3 mr-3" />
		</button>
	);
}
