/*
 * File: app/view/placespage.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.placespage', {
    extend: 'Ext.Container',

    config: {
        id: 'placespage',
        items: [
            {
                xtype: 'container',
                docked: 'top',
                id: 'hedearicon'
            },
            {
                xtype: 'container',
                height: 254,
                id: 'mapcontainer',
                itemId: 'mycontainer7',
                items: [
                    {
                        xtype: 'map',
                        height: 452,
                        id: 'placesmap'
                    }
                ],
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            Ext.Msg.confirm("", "Connect to our SavourSQC website to view content?", function(btn){
                                if (btn == 'yes'){
                                    window.location.href = "http://www.savoursqc.com.au/Mobile/ShowMap/";

                                }
                            });
                        },
                        event: 'initialize'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onPlacespageInitialize',
                event: 'initialize'
            }
        ]
    },

    onPlacespageInitialize: function(component, eOpts) {
        Ext.ComponentQuery.query('navigationview')[0].getNavigationBar().query('button')[1].show();
    }

});