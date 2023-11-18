import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-yak-bridge';

const tokens = [
  new Token(ChainId.FUJI, '0x567A0c028cED53645637E4414c99c6F433860C35', 18, 'SHIBX'),
  new Token(ChainId.ARBITRUM_GOERLI, '0x567A0c028cED53645637E4414c99c6F433860C35', 18, 'SHIBX'),
];

const proxy = [
  {
    chainId: ChainId.FUJI,
    address: '0x5164db46A18C8680393b6df36c0BCc724078a4D9',
  },
];

export const testnet = {tokens, proxy};
