import { useEvents } from "@api/events";
import { EventCard } from "@components/Events";
import { MainEvent } from "@components/Home";
import { Spinner } from "@components/shared";

export const OurEvents = () => {
  const { data: events, isLoading, isError } = useEvents({});

  if (isLoading) {
    return <Spinner isLoading={true} />;
  }

  if (isError || !events) {
    return <p>Failed to load data</p>;
  }

  return (
    <div className="mx-2 bg-[#FFFFFF] pb-28">
      <div className="pt-32 pb-6 text-center text-4xl font-extrabold tracking-wider text-[#254152] uppercase">
        Our Events
      </div>
      <MainEvent />
      <div className="flex flex-row justify-between gap-8 overflow-x-clip p-4">
        {events.rows.map((event) => (
          <div className="w-110 flex-grow" key={event.slug}>
            <EventCard event={event} key={event.slug} />
          </div>
        ))}
      </div>
    </div>
  );
};
