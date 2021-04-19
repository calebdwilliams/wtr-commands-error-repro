import { sendKeysPlugin } from '@web/test-runner-commands';

export default {
    files: 'test/*.test.js',
    plugins: [ sendKeysPlugin() ]
};