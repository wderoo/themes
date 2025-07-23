import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface EnrichedProduct {
  Id: number;
  Name: string;
  Description: string;
}

export const GetEnrichedProduct = async (url?: string) => {
  const { data } = await api.post<EnrichedProduct>(
    "http://localhost:5080/ProductEnrichment",
    {
      url,
    }
  );
  return data;
};

export function useEnrichedProduct(url?: string) {
  return useQuery({
    queryKey: ["enrichedProduct", url],
    queryFn: () => GetEnrichedProduct(url),
    placeholderData: keepPreviousData,
    enabled: !!url && url.length > 0,
  });
}
