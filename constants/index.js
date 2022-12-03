export const CONTRACT_ADDRESS = '0x6E57B7b60d568C36C4E21e1f01B8b5C4D975Ac22';
export const CONTRACT_ABI = [
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'string', name: 'username', type: 'string' },
			{ indexed: false, internalType: 'string', name: 'hash', type: 'string' },
			{ indexed: false, internalType: 'address', name: 'brandAddress', type: 'address' },
		],
		name: 'brandHashCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'string', name: '_username', type: 'string' },
			{ indexed: false, internalType: 'string', name: '_hash', type: 'string' },
			{ indexed: false, internalType: 'string', name: '_name', type: 'string' },
		],
		name: 'campaignCreated',
		type: 'event',
	},
	{
		inputs: [{ internalType: 'string', name: '_username', type: 'string' }],
		name: 'brandOwner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'string', name: '_brand', type: 'string' }],
		name: 'checkNumberOfCampaigns',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'string', name: '_username', type: 'string' }],
		name: 'createBrand',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'string', name: '_username', type: 'string' }],
		name: 'getBrandHash',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_brand', type: 'string' },
			{ internalType: 'string', name: '_campaignHash', type: 'string' },
			{ internalType: 'string', name: '_campaignName', type: 'string' },
		],
		name: 'newCampaign',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_username', type: 'string' },
			{ internalType: 'string', name: '_hash', type: 'string' },
		],
		name: 'setBrandHash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalBrands',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalCampaigns',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'string', name: '_username', type: 'string' }],
		name: 'usernameAvailable',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
];
