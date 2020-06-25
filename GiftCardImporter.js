// ==UserScript==
// @name         Shopify Gift Card Generator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Generate Gift Cards from a list
// @author       You
// @grant    GM.getValue
// @grant    GM.setValue
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @match        https://[STORENAME].myshopify.com/admin/gift_cards/new
// @run-at      document-idle

// ==/UserScript==

/* globals $ */

(function() {
    'use strict';

    function generateCard(element){
            //click generate gift card
            $('button:contains("Issue gift card")').click();
            //change to custom code
            $('#gift_card_code').attr("value", element.code);
            $('.issue-gift-card-code').text(element.code);
            GM.setValue('last', element.code);


          //change to custom code
            $('#gift_card_initial_value').attr("value", element.amount);
            $('.gift_card_initial_value').text(element.amount);
            GM.setValue('last', element.amount);

            //submit!
            //$('form.new_gift_card')[0].submit();
            document.getElementsByName('commit')[0].click();
            var success = false;
            function closeWindow(){

                console.log('last successful code: ');
                console.log(GM.getValue('last'));

                setTimeout(function(){
                    window.location.replace('https://[STORENAME].myshopify.com/admin/gift_cards/new');
                }, 750);
            }

            closeWindow();
            return success;
    }

    function begin(){

        //wait for the page to load / not over-request the shopify server
        setTimeout(function(){
            var cards = JSON.parse(localStorage.getItem('cards'));
            var thisElement = cards.pop();
            console.log(cards);
            localStorage.setItem('cards',JSON.stringify(cards));
            generateCard(thisElement);


        }, 1500);

    }

    begin();

})();
