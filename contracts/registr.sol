pragma solidity 0.8.4;
//import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import"./Token.sol";
contract registr{
    //constant address addressToken = 0xc0FFc879B9564f951A89bB2DcD0dDb45c7ECBD56; // address contracts Token
    struct Note {
        address newUserAddres;
       
       
    }
    mapping(address=>address) accounts;

    function newNote(address newUser) external{
        
        require(accounts[newUser]==newUser,"You already have an account");
         
         accounts[newUser] = newUser;
         //transferSafe
         
      

    }



}