# Shopify-Gift-Card-Mass-Import

## This script does not require Shopify PLUS or the REST API  - It imitates the user and runs client side

Made this script to circumvent the Shopify PLUS requirement. It runs using the chrome extension tampermonkey and utilizes data stored within localStorage . 
Insipired by this [Reddit Post](https://www.reddit.com/r/shopify/comments/e2pmb8/gift_card_import_automation_script/). That script didn't work for me. 

## Instructions:

    * Install Tampermonkey
    * Click "Dashboard" in the menu dropdown the "+" tab, paste the code below
    * Change the //@match to your store's URL and change the link on line 44 which has windows.location.replace to your store's data as well. 
    * Open the chrome console, create this variable which contains your data. 
    '''
      var cards = [
          {
            "code": "CODE1GOESHERE",
            "amount": 5.00
          },
          {
            "code": "CODE2GOESHERE",
            "amount": 20.00
          }];
      
    '''
    
    * Then, save it to localStorage : ''' localStorage.setItem('cards',JSON.stringify(cards)); '''
    * Click the Tampermonkey icon to enable or disable the script. Use the javascript console to monitor progress.
    * Finally , head to your store's /admin/gift_cards/new . The script should start creating cards then. 
    
    Tested and worked for 17000+ cards. 
