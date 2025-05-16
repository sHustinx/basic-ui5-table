sap.ui.jsview("my.ui5.app.view.App", {
    getControllerName: function () {
        return null;  // No controller needed for this example
    },

    createContent: function () {
        // Sample Data for the Table
        var oData = [
            { Name: "John Doe", Age: 29, City: "New York" },
            { Name: "Jane Smith", Age: 34, City: "San Francisco" },
            { Name: "David Johnson", Age: 23, City: "Chicago" },
            { Name: "Samantha Lee", Age: 40, City: "Los Angeles" }
        ];

        // Create a JSONModel and bind it to the Table
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({ people: oData });

        // Create the table
        var oTable = new sap.m.Table({
            headerText: "Sample Data Table",
            growing: true,
            growingThreshold: 5,  // Set a threshold for growing functionality
            items: {
                path: "/people",
                template: new sap.m.ColumnListItem({
                    cells: [
                        new sap.m.Text({ text: "{Name}" }),
                        new sap.m.Text({ text: "{Age}" }),
                        new sap.m.Text({ text: "{City}" })
                    ]
                })
            }
        });

        // Add columns to the table
        oTable.addColumn(new sap.m.Column({
            header: new sap.m.Text({ text: "Name" })
        }));
        oTable.addColumn(new sap.m.Column({
            header: new sap.m.Text({ text: "Age" })
        }));
        oTable.addColumn(new sap.m.Column({
            header: new sap.m.Text({ text: "City" })
        }));

        // Bind the model to the table
        oTable.setModel(oModel);

        // // Create a page and set its content
        // var oPage = new sap.m.Page({
        //     title: "Sample Data Table",
        //     height: "100vh",
        //     content: [
        //         new sap.m.VBox({
        //             items: [oTable],
        //             fitContainer: true,  // Ensure VBox takes the full height
        //             height: "80vh" // Ensure the VBox takes up the available height
        //         })
        //     ]
        // });


        return oTable;
    }
});
