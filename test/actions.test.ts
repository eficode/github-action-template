import { getOutput } from '../src/actions';

describe('Actions', () => {
  describe('get output', () => {
    it('should return an inverted input', async () => {
      const input = 'example string';
      const output = await getOutput(input);

      expect(output).toEqual('gnirts elpmaxe');
    });
  });
});
