export interface ExecutiveMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkedin: string;
  twitter: string;
}

export interface ExecutivesCardProps {
  member: ExecutiveMember;
}
