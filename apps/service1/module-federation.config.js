module.exports = {
  name: 'service1',
  exposes: {
    './Module': 'apps/service1/src/app/remote-entry/entry.module.ts',
  },
};
