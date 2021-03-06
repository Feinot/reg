/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50610f59806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80636392a51f116100715780636392a51f1461013e57806395d89b411461016e5780639dc29fac1461018c578063a9059cbb146101a8578063d9ab0c19146101c4578063dd62ed3e146101e2576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806323b872dd146100e8578063313ce5671461010457806340c10f1914610122575b600080fd5b6100b6610212565b6040516100c39190610ccf565b60405180910390f35b6100e660048036038101906100e19190610bf6565b61024b565b005b61010260048036038101906100fd9190610ba7565b6103ad565b005b61010c6106b5565b6040516101199190610d4c565b60405180910390f35b61013c60048036038101906101379190610bf6565b6106ba565b005b61015860048036038101906101539190610b42565b61072c565b6040516101659190610d31565b60405180910390f35b610176610775565b6040516101839190610ccf565b60405180910390f35b6101a660048036038101906101a19190610bf6565b6107ae565b005b6101c260048036038101906101bd9190610bf6565b6108fe565b005b6101cc610a8b565b6040516101d99190610d31565b60405180910390f35b6101fc60048036038101906101f79190610b6b565b610a91565b6040516102099190610d31565b60405180910390f35b6040518060400160405280600d81526020017f4d794665727374546f6b656e730000000000000000000000000000000000000081525081565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c490610cf1565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156104855750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104829190610d83565b10155b801561050d575080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b61051657600080fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105659190610dd9565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105bb9190610d83565b9250508190555080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461064e9190610dd9565b92505081905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b601281565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107099190610d83565b92505081905550806000808282546107219190610d83565b925050819055505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060400160405280600381526020017f4d4674000000000000000000000000000000000000000000000000000000000081525081565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790610cf1565b60405180910390fd5b806000808282546108419190610dd9565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108979190610dd9565b9250508190555080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097790610d11565b60405180910390fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109cf9190610dd9565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a259190610d83565b92505081905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60005481565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081359050610b2781610ef5565b92915050565b600081359050610b3c81610f0c565b92915050565b600060208284031215610b5457600080fd5b6000610b6284828501610b18565b91505092915050565b60008060408385031215610b7e57600080fd5b6000610b8c85828601610b18565b9250506020610b9d85828601610b18565b9150509250929050565b600080600060608486031215610bbc57600080fd5b6000610bca86828701610b18565b9350506020610bdb86828701610b18565b9250506040610bec86828701610b2d565b9150509250925092565b60008060408385031215610c0957600080fd5b6000610c1785828601610b18565b9250506020610c2885828601610b2d565b9150509250929050565b6000610c3d82610d67565b610c478185610d72565b9350610c57818560208601610e56565b610c6081610eb8565b840191505092915050565b6000610c78600083610d72565b9150610c8382610ec9565b600082019050919050565b6000610c9b600e83610d72565b9150610ca682610ecc565b602082019050919050565b610cba81610e3f565b82525050565b610cc981610e49565b82525050565b60006020820190508181036000830152610ce98184610c32565b905092915050565b60006020820190508181036000830152610d0a81610c6b565b9050919050565b60006020820190508181036000830152610d2a81610c8e565b9050919050565b6000602082019050610d466000830184610cb1565b92915050565b6000602082019050610d616000830184610cc0565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610d8e82610e3f565b9150610d9983610e3f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dce57610dcd610e89565b5b828201905092915050565b6000610de482610e3f565b9150610def83610e3f565b925082821015610e0257610e01610e89565b5b828203905092915050565b6000610e1882610e1f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610e74578082015181840152602081019050610e59565b83811115610e83576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b50565b7f4e6f7468696e67204d6f6e657920000000000000000000000000000000000000600082015250565b610efe81610e0d565b8114610f0957600080fd5b50565b610f1581610e3f565b8114610f2057600080fd5b5056fea2646970667358221220e52e31761a5821ea056e1346e23058dd0add53092e0455c74d86709f13d9fe9d64736f6c63430008040033";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
