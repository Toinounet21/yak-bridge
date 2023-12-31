import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-yak-bridge';

//const tokens = [
  //new Token(ChainId.ARBITRUM, '0x7f4dB37D7bEb31F445307782Bc3Da0F18dF13696', 18, 'YAK'),
  //new Token(ChainId.AVALANCHE, '0x59414b3089ce2af0010e7523dea7e2b35d776ec7', 18, 'YAK'),
//];

const tokens = [
  new Token(ChainId.ARBITRUM, '0x70BA1a777B3f639C58FD5bc6A5C8780ddcEf533b', 18, 'YAK'),
  new Token(ChainId.AVALANCHE, '0x70BA1a777B3f639C58FD5bc6A5C8780ddcEf533b', 18, 'YAK'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    //address: '0x656D33bfB74863E7aB1F5496a7a86a717A18a8D9',
    address: '0xBe04362DAFbCc48eAb0321C3d89EEba56bB4f727',
  },
];

export const mainnet = {tokens, proxy};
