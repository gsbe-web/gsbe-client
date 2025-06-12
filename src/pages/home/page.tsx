import {
  LatestNews,
  MissionStatement,
  NewsletterSubscribe,
  WelcomeAnimation,
} from "@components/Home";
import { OurEvents } from "@components/Home/OurEvents";

export function Home() {
  return (
    <div className="flex w-full flex-col gap-4">
      <WelcomeAnimation />
      <MissionStatement />
      <OurEvents />
      <LatestNews />
      <NewsletterSubscribe />
    </div>
  );
}
