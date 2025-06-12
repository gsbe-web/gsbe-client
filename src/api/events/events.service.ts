import { getEventBySlug, getEvents } from "@api/events/events.repository";
import type { PaginationRequest } from "@api/shared/types";
import { useQuery } from "@tanstack/react-query";

export const useEvents = (params: PaginationRequest) =>
  useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(params),
  });

export const useEvent = (slug: string) =>
  useQuery({
    queryKey: ["events", slug],
    queryFn: () => getEventBySlug(slug),
    enabled: !!slug,
  });
