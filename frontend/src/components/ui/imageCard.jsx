/* eslint-disable react/prop-types */

export default function ImageCard({ title, image, transparent }) {
	return (
		<div className="relative w-38 h-42 rounded-3xl overflow-hidden">
			<img src={image} className="w-full h-full object-cover" />
			<div
				className={`absolute bottom-0 h-16 w-full p-4  text-sm font-semibold flex items-center ${
					transparent
						? "bg-white/50 backdrop-blur-xs text-blue-950"
						: "bg-blue-950 text-white"
				} rounded-b-3xl`}
			>
				<span>{title}</span>
			</div>
		</div>
	);
}
