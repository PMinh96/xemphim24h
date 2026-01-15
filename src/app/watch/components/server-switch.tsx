interface ServerSwitchProps {
  servers: string[];
}

export const ServerSwitch = ({ servers }: ServerSwitchProps) => {
  return (
    <div className="mb-4 flex gap-2 mt-2 text-center">
      {servers.map((server) => (
        <button
          key={server}
          className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-blue-600 hover:text-white"
        >
          {server}
        </button>
      ))}
    </div>
  );
};

