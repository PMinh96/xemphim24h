interface Episode {
  id: number;
  label: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

export const EpisodeList = ({ episodes }: EpisodeListProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 relative z-10 mt-4">
      {episodes.map((ep) => (
        <button
          key={ep.id}
          className="rounded bg-gray-800 text-white px-3 py-2 text-sm hover:bg-gray-700 transition-colors relative z-10"
        >
          {ep.label}
        </button>
      ))}
    </div>
  );
};
