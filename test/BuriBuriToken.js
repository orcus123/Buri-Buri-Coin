const BuriBuriToken = artifacts.require("BuriBuriToken");

contract('BuriBuriToken' , function(){
    it('Deploys properly',function(){
        return BuriBuriToken.deployed().then(function(ins){
            token = ins;
            return token.totalSupply().then(function(total){
                assert.equal(total.toNumber(),5000,'total supply set properly')
            })
        })
    })
})
