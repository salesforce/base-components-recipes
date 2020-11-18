public with sharing class GetAccountId {
    @AuraEnabled(cacheable=true)
    public static Account GetAccountId() {
        Account accountInfo = [SELECT Id, Name FROM Account LIMIT 1];
        return accountInfo;
    }
}
