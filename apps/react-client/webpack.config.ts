import { Configuration } from 'webpack';
import devConfig from './webpack.config.dev';
import prodConfig from './webpack.config.prod';

/* 
  We can leverage the [npm_lifecycle_event]
  (https://docs.npmjs.com/cli/v10/using-npm/scripts#current-lifecycle-event) 
  (set by npm during the execution of the script) 
  from node process to access which npm script 
  is being executed. 
*/
const TARGET = process.env.npm_lifecycle_event;
let config!: Configuration;

if( TARGET === 'dev')
  config = devConfig;
else 
  config = prodConfig;

export default config;
