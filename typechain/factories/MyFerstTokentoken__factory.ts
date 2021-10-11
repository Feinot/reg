/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MyFerstTokentoken,
  MyFerstTokentokenInterface,
} from "../MyFerstTokentoken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balancesOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSepply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e9f806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80636392a51f116100665780636392a51f1461013357806395d89b4114610163578063a9059cbb14610181578063d9ab0c191461019d578063dd62ed3e146101bb5761009e565b806306fdde03146100a3578063095ea7b3146100c157806323b872dd146100dd578063313ce567146100f957806340c10f1914610117575b600080fd5b6100ab6101eb565b6040516100b89190610c81565b60405180910390f35b6100db60048036038101906100d69190610bee565b610224565b005b6100f760048036038101906100f29190610b9f565b6103e5565b005b6101016106ed565b60405161010e9190610cbe565b60405180910390f35b610131600480360381019061012c9190610bee565b6106f2565b005b61014d60048036038101906101489190610b3a565b610815565b60405161015a9190610ca3565b60405180910390f35b61016b61085e565b6040516101789190610c81565b60405180910390f35b61019b60048036038101906101969190610bee565b610897565b005b6101a5610a83565b6040516101b29190610ca3565b60405180910390f35b6101d560048036038101906101d09190610b63565b610a89565b6040516101e29190610ca3565b60405180910390f35b6040518060400160405280600d81526020017f4d794665727374546f6b656e730000000000000000000000000000000000000081525081565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156102fc5750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102f99190610cf5565b10155b61030557600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156104bd5750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ba9190610cf5565b10155b8015610545575080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b61054e57600080fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461059d9190610d4b565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105f39190610cf5565b9250508190555080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106869190610d4b565b92505081905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b601281565b600054816000546107039190610cf5565b1015801561079a5750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107979190610cf5565b10155b6107a357600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107f29190610cf5565b925050819055508060008082825461080a9190610cf5565b925050819055505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060400160405280600381526020017f4d4674000000000000000000000000000000000000000000000000000000000081525081565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015801561096f5750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461096c9190610cf5565b10155b61097857600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109c79190610d4b565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a1d9190610cf5565b92505081905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60005481565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081359050610b1f81610e3b565b92915050565b600081359050610b3481610e52565b92915050565b600060208284031215610b4c57600080fd5b6000610b5a84828501610b10565b91505092915050565b60008060408385031215610b7657600080fd5b6000610b8485828601610b10565b9250506020610b9585828601610b10565b9150509250929050565b600080600060608486031215610bb457600080fd5b6000610bc286828701610b10565b9350506020610bd386828701610b10565b9250506040610be486828701610b25565b9150509250925092565b60008060408385031215610c0157600080fd5b6000610c0f85828601610b10565b9250506020610c2085828601610b25565b9150509250929050565b6000610c3582610cd9565b610c3f8185610ce4565b9350610c4f818560208601610dc8565b610c5881610e2a565b840191505092915050565b610c6c81610db1565b82525050565b610c7b81610dbb565b82525050565b60006020820190508181036000830152610c9b8184610c2a565b905092915050565b6000602082019050610cb86000830184610c63565b92915050565b6000602082019050610cd36000830184610c72565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610d0082610db1565b9150610d0b83610db1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d4057610d3f610dfb565b5b828201905092915050565b6000610d5682610db1565b9150610d6183610db1565b925082821015610d7457610d73610dfb565b5b828203905092915050565b6000610d8a82610d91565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610de6578082015181840152602081019050610dcb565b83811115610df5576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610e4481610d7f565b8114610e4f57600080fd5b50565b610e5b81610db1565b8114610e6657600080fd5b5056fea2646970667358221220b2412efe67de5e6d25dde62076d6b950ea2709c68b25b0abd26b9023bda9a2d864736f6c63430008040033";

export class MyFerstTokentoken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyFerstTokentoken> {
    return super.deploy(overrides || {}) as Promise<MyFerstTokentoken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyFerstTokentoken {
    return super.attach(address) as MyFerstTokentoken;
  }
  connect(signer: Signer): MyFerstTokentoken__factory {
    return super.connect(signer) as MyFerstTokentoken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyFerstTokentokenInterface {
    return new utils.Interface(_abi) as MyFerstTokentokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyFerstTokentoken {
    return new Contract(address, _abi, signerOrProvider) as MyFerstTokentoken;
  }
}
