import { PostTasksExecutionContext } from '@nx/devkit';

// context contains workspaceRoot, nx.json configuration, and task results
export async function postTasksExecution(
  options: { failOnCacheMiss: boolean },
  context: PostTasksExecutionContext
) {
  const cacheHit = Object.values(context.taskResults).every((task) =>
    ['remote-cache', 'local-cache-kept-existing', 'local-cache'].includes(
      task.status
    )
  );

  if (!cacheHit && process.env.FAIL_ON_CACHE_MISS === 'true') {
    throw new Error(`Cache missed`);
  }
}
