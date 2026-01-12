interface Episode {
  id: number;
  label: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

export const EpisodeList = ({ episodes }: EpisodeListProps) => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {episodes.map((ep) => (
        <button
          key={ep.id}
          className="rounded bg-gray-200 px-3 py-2 text-sm hover:bg-blue-600 hover:text-white"
        >
          {ep.label}
        </button>
      ))}
    </div>
  );
};
