import { Config } from '@stencil/core';
import { less } from '@xmagic/stencil-less';

export const config: Config = {
  namespace: 'web-ant',
  plugins: [
    less({
      javascriptEnabled: true,
      injectGlobalPaths: [
        'src/globals/style/variable.less'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
