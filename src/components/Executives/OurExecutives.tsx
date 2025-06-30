/** biome-ignore-all lint/nursery/noSecrets: intentional */

import { ExecutivesCard } from "@components/Executives/ExecutivesCard";

const teamMembers = [
	{
		id: 1,
		name: "Lindsay Walton",
		role: "CEO",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 2,
		name: "Courtney Henry",
		role: "COO",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 3,
		name: "Tom Cook",
		role: "Director of Product",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 4,
		name: "Whitney Francis",
		role: "Copywriter",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 5,
		name: "Leonard Krasner",
		role: "Senior Engineer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 6,
		name: "Floyd Miles",
		role: "Principal Designer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 7,
		name: "Floyd Miles",
		role: "Principal Designer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 8,
		name: "Floyd Miles",
		role: "Principal Designer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
	{
		id: 9,
		name: "Floyd Miles",
		role: "Principal Designer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		linkedin: "#",
		twitter: "#",
	},
];

export const Team = () => {
	return (
		<section className="md:p-16 lg:p-10">
			<div className="flex flex-col gap-8 bg-white md:py-10">
				<h2 className=" text-center text-4xl uppercase tracking-[7px] font-[900] text-[#D55342] pb-8">
					Meet Our Executives
				</h2>

				<div className="flex flex-wrap justify-center gap-18 p-4 md:p-0">
					{teamMembers.map((member) => (
						<div className="w-full lg:w-[25rem]" key={member.id}>
							<ExecutivesCard key={member.id} member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
