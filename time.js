const metadata = {
  'job-67b8382c9ea52a60323a29d1-0-agent-1': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:25:06.501Z',
    offlineAt: '2025-02-21T08:31:25.640Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-0': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:25:08.615Z',
    offlineAt: '2025-02-21T08:31:25.186Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-3': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:25:08.688Z',
    offlineAt: '2025-02-21T08:31:25.865Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-2': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:25:09.187Z',
    offlineAt: '2025-02-21T08:31:24.604Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-8': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:25:42.461Z',
    offlineAt: '2025-02-21T08:31:24.393Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-6': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:26:34.250Z',
    offlineAt: '2025-02-21T08:31:24.810Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-5': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:26:34.334Z',
    offlineAt: '2025-02-21T08:31:23.261Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-4': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:26:34.428Z',
    offlineAt: '2025-02-21T08:31:22.952Z',
  },
  'job-67b8382c9ea52a60323a29d1-0-agent-7': {
    targets: [],
    launchTemplate: 'linux-large-js',
    onlineAt: '2025-02-21T08:26:34.719Z',
    offlineAt: '2025-02-21T08:31:25.415Z',
  },
};

function main() {
  const timeConsumed = Object.values(metadata).map((agent) =>
    Math.ceil(
      (new Date(agent.offlineAt).getTime() - new Date(agent.onlineAt)) / 60000
    )
  );

  const totalTime = timeConsumed.reduce((curr, acc) => curr + acc, 0);
  const creditsUsed = totalTime * 20;
  const cost = creditsUsed * 0.00055;
  console.log('total time', totalTime);
  console.log('total cost', cost);
}

main();
