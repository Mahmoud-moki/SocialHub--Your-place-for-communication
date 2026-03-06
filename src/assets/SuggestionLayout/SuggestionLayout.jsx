import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function SuggestionLayout() {
  const GetSuggestion = () => {
    return axios.get(
      "https://route-posts.routemisr.com/users/suggestions?limit=4",
      {
        headers: { Token: localStorage.getItem("token") },
      }
    );
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetSuggestion"],
    queryFn: GetSuggestion,
  });

  if (isLoading) return <p className="text-sm text-slate-400">Loading...</p>;

  const suggestions = data?.data?.data?.suggestions || [];

  return (
    <div className="space-y-3">
      {suggestions.map((user) => {
        const { _id, name, username, photo , followersCount} = user;

        return (
          <div
            key={_id}
            className="rounded-xl border border-slate-200 p-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <button className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={photo}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900 hover:underline">
                    {name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    @{username}
                  </p>
                </div>
              </button>

              <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                Follow
              </button>
            </div>

            <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
              <span className="rounded-full bg-slate-100 px-2 py-0.5">
                {followersCount} Followrs
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}