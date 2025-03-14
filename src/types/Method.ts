export enum Method {
  GET_DATA_LEGACY = 'getDataLegacy', // For legacy ERC725 with interface id: 0x2bd57b73 NOTE: I had to add Legacy at the end so the map keys stays unique
  GET_DATA = 'getData', // For latest ERC725 with interface id: 0x5a988c0f
  OWNER = 'owner',
  SUPPORTS_INTERFACE = 'supportsInterface', // https://eips.ethereum.org/EIPS/eip-165
  IS_VALID_SIGNATURE = 'isValidSignature', // https://eips.ethereum.org/EIPS/eip-1271
}

export enum Encoding {
  BYTES = 'bytes',
  BYTES4 = 'bytes4',
  BOOL = 'bool',
  UINT256 = 'uint256',
  BYTES32_ARRAY = 'bytes32[]',
  BYTES_ARRAY = 'bytes[]',
  ADDRESS = 'address',
}

export interface MethodData {
  sig: string;
  gas: string;
  gasPrice: string;
  value: string;
  returnEncoding: Encoding;
}

export interface Permissions {
  CHANGEOWNER?: boolean;
  CHANGEPERMISSIONS?: boolean;
  ADDPERMISSIONS?: boolean;
  SETDATA?: boolean;
  CALL?: boolean;
  STATICCALL?: boolean;
  DELEGATECALL?: boolean;
  DEPLOY?: boolean;
  TRANSFERVALUE?: boolean;
  SIGN?: boolean;
  ENCRYPT?: boolean;
  SUPER_SETDATA?: boolean;
  SUPER_TRANSFERVALUE?: boolean;
  SUPER_CALL?: boolean;
  SUPER_STATICCALL?: boolean;
  SUPER_DELEGATECALL?: boolean;
}
