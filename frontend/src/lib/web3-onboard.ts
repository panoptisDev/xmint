import Onboard from '@web3-onboard/core';
import type { OnboardAPI } from '@web3-onboard/core';

import injectedWalletsModule from '@web3-onboard/injected-wallets';
// import walletConnectModule from '@web3-onboard/walletconnect';

// const wcV2InitOptions = {
// 	projectId: process.env.NEXT_PUBLIC_WALLETCONNECT ?? '',
// 	requiredChains: [43114],
// 	dappUrl: 'https://app.kassandra.finance',
// 	version: 2 as const
// };

const injected = injectedWalletsModule();
// const walletConnect = walletConnectModule(wcV2InitOptions);

// const injected = injectedModule({
// 	displayUnavailable: true,
// 	sort: (wallets) => {
// 		const metaMask = wallets.find(({ label }) => label === ProviderLabel.MetaMask);
// 		const coinbase = wallets.find(({ label }) => label === ProviderLabel.Coinbase);

// 		return (
// 			[
// 				metaMask,
// 				coinbase,
// 				...wallets.filter(
// 					({ label }) => label !== ProviderLabel.MetaMask && label !== ProviderLabel.Coinbase
// 				)
// 			]
// 				// remove undefined values
// 				.flatMap((wallet) => (wallet ? wallet : []))
// 		);
// 	}
// });

// const wallets = [injected, walletConnect];
const wallets = [injected];

const chains = [
	{
		id: '0x32',
		token: 'XDC',
		label: 'XinFin XDC Network',
		rpcUrl: 'https://rpc.xdcrpc.com',
		blockExplorerUrl: 'https://xdc.blocksscan.io/'
	}
	// {
	//   id: '0x5',
	//   token: 'ETH',
	//   label: 'Goerli Test Network',
	//   rpcUrl: 'https://rpc.ankr.com/eth_goerli'
	// }
];

// const appMetadata = {
// 	name: 'Kassandra',
// 	icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 698 698"><g filter="url(#a)" transform="translate(-.33878002 36.076565)"><path stroke="url(#b)" stroke-miterlimit="10" stroke-width="12.0061" d="M667.839 349.53c0 94.873-41.54 180.031-107.278 238.326L407.742 453.929h148.436c12.005 0 21.913-9.716 21.913-21.909 0-12.002-9.718-21.908-21.913-21.908H142.5c-12.005 0-21.913 9.716-21.913 21.908 0 12.002 9.718 21.909 21.913 21.909h166.729L144.215 593C74.8553 534.514 30.8389 447.071 30.8389 349.34 30.8389 173.5 173.368 31 349.243 31c175.876.1905 318.596 142.691 318.596 318.53z"/></g><path stroke="url(#c)" stroke-miterlimit="10" stroke-width="9.60486" d="M667.50019 385.60654c0 94.873-41.54 180.031-107.27799 238.32599l-152.819-133.92699h148.436c12.005 0 21.913-9.716 21.913-21.909 0-12.002-9.718-21.908-21.913-21.908H142.16121c-12.005 0-21.91299 9.716-21.91299 21.908 0 12.002 9.71799 21.909 21.91299 21.909h166.729l-165.014 139.07099C74.516516 570.59054 30.500118 483.14754 30.500118 385.41654c0-175.83999 142.529092-318.339977 318.404092-318.339977 175.87599.1905 318.59598 142.690987 318.59598 318.529977z"/><defs id="defs555"><linearGradient id="b" x1="349.837" x2="349.837" y1="-229.573" y2="789.8" gradientUnits="userSpaceOnUse"><stop id="stop545" stop-color="#FFBF00"/><stop id="stop547" offset="1" stop-color="#E843C4"/></linearGradient><linearGradient id="c" x1="349.339" x2="349.339" y1="31" y2="593" gradientTransform="translate(-.33878002 36.076565)" gradientUnits="userSpaceOnUse"><stop id="stop550" stop-color="#FFBF00"/><stop id="stop552" offset="1" stop-color="#E843C4"/></linearGradient><filter id="a" width="697.03" height="623.879" x=".82378" y=".983936" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood id="feFlood538" flood-opacity="0" result="BackgroundImageFix"/><feBlend id="feBlend540" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/><feGaussianBlur id="feGaussianBlur542" result="effect1_foregroundBlur" stdDeviation="12.0061"/></filter></defs></svg>',
// 	logo: `<svg width="216" height="34" viewBox="0 0 216 34" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_f_4442_53300)">
// <path d="M32 18.4858C32 22.2422 30.3045 25.6139 27.6213 27.922L21.3838 22.6193H27.4424C27.9324 22.6193 28.3368 22.2347 28.3368 21.7519C28.3368 21.2767 27.9402 20.8845 27.4424 20.8845H10.5576C10.0676 20.8845 9.66318 21.2692 9.66318 21.7519C9.66318 22.2271 10.0598 22.6193 10.5576 22.6193H17.3628L10.6276 28.1257C7.79659 25.81 6 22.3478 6 18.4783C6 11.5161 11.8175 5.87402 18.9961 5.87402C26.1747 5.88157 32 11.5237 32 18.4858Z" stroke="url(#paint0_linear_4442_53300)" stroke-width="0.666667" stroke-miterlimit="10"/>
// </g>
// <path d="M32 18.4829C32 22.2385 30.3045 25.6094 27.6213 27.917L21.3838 22.6155H27.4424C27.9324 22.6155 28.3368 22.2309 28.3368 21.7483C28.3368 21.2732 27.9402 20.8811 27.4424 20.8811H10.5576C10.0676 20.8811 9.66318 21.2657 9.66318 21.7483C9.66318 22.2234 10.0598 22.6155 10.5576 22.6155H17.3628L10.6276 28.1206C7.79659 25.8055 6 22.344 6 18.4754C6 11.5149 11.8175 5.87402 18.9961 5.87402C26.1747 5.88156 32 11.5224 32 18.4829Z" stroke="url(#paint1_linear_4442_53300)" stroke-width="0.666667" stroke-miterlimit="10"/>
// <path d="M60.7061 12.4667H57.4034L49.0778 19.7444V9H46.9219V25.0707H49.0778V22.6371L53.9401 18.3899L59.7428 25.0707H62.5868L55.5685 16.9435L60.7061 12.4667Z" fill="url(#paint2_linear_4442_53300)"/>
// <path d="M75.2149 12.4667H63.7472V14.6247H75.2149C76.5222 14.6247 77.5772 15.7038 77.5772 17.0124V17.6782H67.4168C65.3756 17.6782 63.7472 19.3311 63.7472 21.3744C63.7472 23.4177 65.3756 25.0707 67.4168 25.0707H79.7561V17.0124C79.7561 14.5099 77.7378 12.4667 75.2149 12.4667ZM77.5772 22.8897H67.4168C66.5682 22.8897 65.9031 22.2239 65.9031 21.3744C65.9031 20.5479 66.5682 19.8592 67.4168 19.8592H77.5772V22.8897Z" fill="url(#paint3_linear_4442_53300)"/>
// <path d="M95.5323 17.6782H86.8627C86.037 17.6782 85.3719 16.9894 85.3719 16.14C85.3719 15.3135 86.037 14.6247 86.8627 14.6247H99.202V12.4667H86.8627C84.8444 12.4667 83.193 14.0967 83.193 16.14C83.193 18.2062 84.8444 19.8592 86.8627 19.8592H95.5323C96.3809 19.8592 97.046 20.5479 97.046 21.3744C97.046 22.2239 96.3809 22.8897 95.5323 22.8897H83.193V25.0707H95.5323C97.5735 25.0707 99.202 23.4177 99.202 21.3744C99.202 19.3311 97.5735 17.6782 95.5323 17.6782Z" fill="url(#paint4_linear_4442_53300)"/>
// <path d="M114.978 17.6782H106.309C105.483 17.6782 104.818 16.9894 104.818 16.14C104.818 15.3135 105.483 14.6247 106.309 14.6247H118.648V12.4667H106.309C104.29 12.4667 102.639 14.0967 102.639 16.14C102.639 18.2062 104.29 19.8592 106.309 19.8592H114.978C115.827 19.8592 116.492 20.5479 116.492 21.3744C116.492 22.2239 115.827 22.8897 114.978 22.8897H102.639V25.0707H114.978C117.019 25.0707 118.648 23.4177 118.648 21.3744C118.648 19.3311 117.019 17.6782 114.978 17.6782Z" fill="url(#paint5_linear_4442_53300)"/>
// <path d="M133.552 12.4667H122.085V14.6247H133.552C134.86 14.6247 135.915 15.7038 135.915 17.0124V17.6782H125.754C123.713 17.6782 122.085 19.3311 122.085 21.3744C122.085 23.4177 123.713 25.0707 125.754 25.0707H138.094V17.0124C138.094 14.5099 136.075 12.4667 133.552 12.4667ZM135.915 22.8897H125.754C124.906 22.8897 124.241 22.2239 124.241 21.3744C124.241 20.5479 124.906 19.8592 125.754 19.8592H135.915V22.8897Z" fill="url(#paint6_linear_4442_53300)"/>
// <path d="M153.021 12.4667H141.531V25.0707H143.687V14.6247H153.021C154.306 14.6247 155.384 15.7038 155.384 17.0124V25.0707H157.54V17.0124C157.54 14.5099 155.498 12.4667 153.021 12.4667Z" fill="url(#paint7_linear_4442_53300)"/>
// <path d="M174.829 12.4667H165.518C163.018 12.4667 160.976 14.5099 160.976 17.0124V20.502C160.976 23.0274 163.018 25.0707 165.518 25.0707H177.008V9H174.829V12.4667ZM174.829 22.8897H165.518C164.21 22.8897 163.132 21.8106 163.132 20.502V17.0124C163.132 15.7038 164.21 14.6247 165.518 14.6247H174.829V22.8897Z" fill="url(#paint8_linear_4442_53300)"/>
// <path d="M180.445 17.0124V25.0707H182.601V17.0124C182.601 15.7038 183.656 14.6247 184.986 14.6247H196.477V12.4667H184.986C182.463 12.4667 180.445 14.5099 180.445 17.0124Z" fill="url(#paint9_linear_4442_53300)"/>
// <path d="M211.381 12.4667H199.913V14.6247H211.381C212.688 14.6247 213.743 15.7038 213.743 17.0124V17.6782H203.583C201.541 17.6782 199.913 19.3311 199.913 21.3744C199.913 23.4177 201.541 25.0707 203.583 25.0707H215.922V17.0124C215.922 14.5099 213.904 12.4667 211.381 12.4667ZM213.743 22.8897H203.583C202.734 22.8897 202.069 22.2239 202.069 21.3744C202.069 20.5479 202.734 19.8592 203.583 19.8592H213.743V22.8897Z" fill="url(#paint10_linear_4442_53300)"/>
// <defs>
// <filter id="filter0_f_4442_53300" x="0.333659" y="0.207682" width="37.3327" height="33.6823" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feGaussianBlur stdDeviation="2.66667" result="effect1_foregroundBlur_4442_53300"/>
// </filter>
// <linearGradient id="paint0_linear_4442_53300" x1="19.0203" y1="-4.44302" x2="19.0203" y2="35.9177" gradientUnits="userSpaceOnUse">
// <stop stop-color="#FFBF00"/>
// <stop offset="1" stop-color="#E843C4"/>
// </linearGradient>
// <linearGradient id="paint1_linear_4442_53300" x1="19" y1="5.87402" x2="19" y2="28.1206" gradientUnits="userSpaceOnUse">
// <stop stop-color="#FFBF00"/>
// <stop offset="1" stop-color="#E843C4"/>
// </linearGradient>
// <linearGradient id="paint2_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint3_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint4_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint5_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint6_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint7_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint8_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint9_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// <linearGradient id="paint10_linear_4442_53300" x1="136.752" y1="7.85209" x2="136.752" y2="30.8102" gradientUnits="userSpaceOnUse">
// <stop stop-color="#E843C4"/>
// <stop offset="1" stop-color="#FFBF00"/>
// </linearGradient>
// </defs>
// </svg>`,
// 	description: 'Example showcasing how to connect a wallet.',
// 	gettingStartedGuide: 'https://www.kassandra.finance/managers',
// 	explore: 'https://www.kassandra.finance/',
// 	recommendedInjectedWallets: [{ name: 'MetaMask', url: 'https://metamask.io' }]
// agreement: {
//   // user agrees with exact version of terms and privacy policy
//   version: '0.0',
//   // url that points to the Terms & Conditions of the dapp
//   termsUrl: 'https://www.kassandra.finance/',
//   // url that points to the Privacy policy of the dapp
//   privacyUrl: 'https://www.kassandra.finance/'
// }
// accountCenter: {
// 	desktop: {
// 		enabled: false,
// 		position: 'topRight'
// 	},
// 	mobile: {
// 		enabled: true,
// 		position: 'topRight'
// 	}
// }
// };

const appMetadata = {
	name: 'Web3-Onboard Svelte Demo',
	icon: '<svg />',
	logo: '<svg />',
	description: 'Demo using Onboard',
	recommendedInjectedWallets: [
		{ name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
		{ name: 'MetaMask', url: 'https://metamask.io' }
	]
};

let onboard;

if (!onboard) {
	onboard = Onboard({
		wallets,
		chains,
		appMetadata,
		accountCenter: {
			desktop: {
				enabled: true,
				position: 'topLeft'
			},
			mobile: {
				enabled: true,
				position: 'topRight'
			}
		},
		connect: { autoConnectLastWallet: true },
		theme: {
			'--w3o-background-color': 'linear-gradient(164.99deg, #1b1d22 19.85%, #333437 116.33%)',
			'--w3o-foreground-color': '#1B1D22',
			'--w3o-text-color': '#fcfcfc',
			'--w3o-border-color': 'rgba(255, 255, 255, 0.05)',
			'--w3o-action-color': 'unset',
			'--w3o-border-radius': '8px',
			'--w3o-font-family': 'Archivo'
		}
	});
}

export default onboard as OnboardAPI;
