const metadata = {
  'job-67b7bcb4d0cce052ba80158f-0-agent-2': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:38:35.123Z',
    offlineAt: '2025-02-20T23:47:11.579Z',
  },
  'job-67b7bcb4d0cce052ba80158f-0-agent-0': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:38:35.439Z',
    offlineAt: '2025-02-20T23:47:09.318Z',
  },
  'job-67b7bcb4d0cce052ba80158f-0-agent-1': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:39:14.413Z',
    offlineAt: '2025-02-20T23:47:10.342Z',
  },
  'job-67b7bcb4d0cce052ba80158f-0-agent-3': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:39:14.641Z',
    offlineAt: '2025-02-20T23:47:09.998Z',
  },
  'job-67b7bcb4d0cce052ba80158f-0-agent-4': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:39:58.145Z',
    offlineAt: '2025-02-20T23:47:10.629Z',
  },
  'job-67b7bcb4d0cce052ba80158f-0-agent-5': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-20T23:39:58.225Z',
    offlineAt: '2025-02-20T23:47:10.926Z',
  },
};

function main() {
  const timeConsumed = Object.values(metadata).map((agent) =>
    Math.round(
      (new Date(agent.offlineAt).getTime() - new Date(agent.onlineAt)) / 60000
    )
  );

  console.log(timeConsumed.reduce((curr, acc) => curr + acc, 0));
}

main();
