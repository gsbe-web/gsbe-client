/** biome-ignore-all lint/nursery/noSecrets: intentional */

import { type Member, useMembers } from "@api/members";
import { ExecutivesCard } from "@components/Executives";
import { Spinner } from "@components/shared";
import { useEffect } from "react";

const _teamMembers: Member[] = [
	{
		id: "1",
		slug: "lindsay-walton",
		type: "EXECUTIVE",
		name: "Lindsay Walton",
		imageId: "image-1",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "CEO",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		email: "lindsay.walton@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "2",
		slug: "courtney-henry",
		type: "EXECUTIVE",
		name: "Courtney Henry",
		imageId: "image-2",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "COO",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		email: "courtney.henry@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "3",
		slug: "tom-cook",
		type: "EXECUTIVE",
		name: "Tom Cook",
		imageId: "image-3",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "Director of Product",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		email: "tom.cook@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "4",
		slug: "whitney-francis",
		type: "EXECUTIVE",
		name: "Whitney Francis",
		imageId: "image-4",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "Copywriter",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		email: "whitney.francis@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "5",
		slug: "leonard-krasner",
		type: "EXECUTIVE",
		name: "Leonard Krasner",
		imageId: "image-5",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "Senior Engineer",
		description:
			"This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
		email: "leonard.krasner@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "6",
		slug: "floyd-miles",
		type: "EXECUTIVE",
		name: "Floyd Miles",
		imageId: "image-6",
		imageUrl:
			"https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
		role: "Principal Designer",
		email: "floyd.miles@example.com",
		linkedinUrl: "#",
		twitterUrl: "#",
		instagramUrl: "#",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

/*
description:
      "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
*/

export function OurExecutives() {
	const {
		data: members,
		isLoading,
		isError,
		isFetching,
	} = useMembers({ pageSize: 9, search: "EXECUTIVE", searchFields: ["type"] });

	const loadingStatus = (() => {
		if (isLoading || isFetching) {
			return <Spinner isLoading={true} />;
		}

		if (isError) {
			return <p>Failed to load Members</p>;
		}

		if (!members) {
			return <p>Members not found</p>;
		}
		return null;
	})();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<section className="flex min-h-screen w-full flex-col gap-4 bg-white">
			<div className="md:p-16 lg:p-10">
				<div className="flex flex-col gap-8 bg-white md:py-10">
					<h2 className="block pt-4 text-center text-2xl font-[900] tracking-[7px] text-[#D55342] uppercase md:pb-8 md:text-4xl">
						Meet Our Executives
					</h2>

					<div className="flex flex-wrap justify-center gap-18 max-md:p-4">
						{loadingStatus ||
							_teamMembers.map((member) => (
								<div className="w-full lg:w-[25rem]" key={member.id}>
									<ExecutivesCard key={member.id} member={member} />
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
