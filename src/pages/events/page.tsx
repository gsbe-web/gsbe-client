import { useEvents } from "@api/events";
import { EventCard } from "@components/Events";
import { Spinner } from "@components/shared";

export function Events() {
  const { data: events, isLoading, isError } = useEvents({});

  if (isLoading) {
    return <Spinner isLoading={true} />;
  }

  if (isError || !events) {
    return <p>Failed to load data</p>;
  }

  return (
    <div className="min-h-screen bg-[#EAEAE8]">
      <div className="md:p-12 lg:p-20">
        <div className="bg-white px-0 py-6 text-[#455D6B] shadow-lg md:rounded-lg md:p-6">
          <h1 className="mt-8 mb-12 text-center text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
            upcoming events
          </h1>
          <div className="flex flex-wrap justify-center gap-8 p-4">
            {events.rows.map((event) => (
              <div className="w-[27rem]" key={event.slug}>
                <EventCard event={event} key={event.slug} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
