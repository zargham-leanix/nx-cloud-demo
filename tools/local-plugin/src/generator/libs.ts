import {
  componentGenerator,
  libraryGenerator,
  UnitTestRunner,
} from '@nx/angular/generators';
import { formatFiles, Tree } from '@nx/devkit';

export async function libsGenerator(tree: Tree) {
  const libs = Array<number>(2)
    .fill(0)
    .map((_, index) => index + 1);

  for (const lib of libs) {
    await generateLib(tree, lib);
  }

  tree.write(
    'apps/nx-cloud-demo/src/app/app.component.ts',
    createAppComponent(libs)
  );
  await formatFiles(tree);
}

export default libsGenerator;

async function generateLib(tree: Tree, index: number) {
  const name = `lib${index}`;
  await libraryGenerator(tree, {
    name: name,
    directory: `libs/${name}`,
    unitTestRunner: UnitTestRunner.Jest,
    buildable: true,
    standaloneConfig: true,
    standalone: false,
    prefix: 'nx',
    publishable: true,
    importPath: `@demo/${name}`,
    style: 'scss',
  });

  for (let i = 0; i < 100; i++) {
    const cmpName = `${name}-demo${i}`;
    await componentGenerator(tree, {
      path: `libs/${name}/src/lib/components/${cmpName}/${cmpName}`,
      name: cmpName,
      standalone: false,
      changeDetection: 'OnPush',
      export: true,
    });
  }
}

function createAppComponent(indexes: number[]) {
  return `
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
${indexes
  .map((it) => `import {Lib${it}Module } from '@demo/lib${it}'`)
  .join(';')}

@Component({
  standalone: true,
  imports: [
  NxWelcomeComponent,
  RouterModule,
${indexes.map((it) => `Lib${it}Module`)}
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-cloud-demo';
}
`;
}
