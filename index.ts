import * as core from '@actions/core';

import { getOutput } from './src/actions';

(async () => {
  try {
    const input = core.getInput('input_example');

    const output = await getOutput(input);

    core.setOutput('output_example', output);
  } catch (error: any) {
    core.setFailed(error.message);
  }
})();
