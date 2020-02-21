const Invoice = require('./invoice.js');
const InvoiceLine = require('./invoiceLine.js');



    test('Add Invoice line', () => {
        let invoice = new Invoice(
            new Date(),
            "1000",
            [
                new InvoiceLine(1, 1.99, 20, "Peer")
            ]);
        let spy = jest.spyOn(invoice, 'AddInvoiceLine');

        expect(invoice.AddInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"))).toEqual([
            {"Cost": 1.99, "Description": "Peer", "InvoiceLineId": 1, "Quantity": 20}, {"Cost": 6.99, "Description": "Apple", "InvoiceLineId": 1, "Quantity": 1}
        ]);

        spy.mockRestore();
    });

    test('Remove Invoice line according to index', () => {
        let invoice = new Invoice(
            new Date(),
            "1000",
            [
                new InvoiceLine(1, 1.99, 20, "Peer")
            ]);
        
        invoice.AddInvoiceLine(new InvoiceLine(2, 10.21, 1, "Orange"));

        let spy = jest.spyOn(invoice, 'RemoveInvoiceLine');

        expect(invoice.RemoveInvoiceLine(0)).toEqual([{"Cost": 10.21, "Description": "Orange", "InvoiceLineId": 2, "Quantity": 1}]);

        spy.mockRestore();
    });

  test('Get total cost of items ', () => {
    let invoice = new Invoice(
        new Date(),
        "1000",
        [
            new InvoiceLine(1, 1.99, 20, "Peer")
        ]);
    let spy = jest.spyOn(invoice, 'GetTotal');

    expect(invoice.GetTotal()).toBe("1.99");

    spy.mockRestore();
    });

    test('Check if Invoices Merged', () => {
        let invoice = new Invoice(
            new Date(),
            "1000",
            [
                new InvoiceLine(1, 1.99, 20, "Peer")
            ]
            );
        
         const invoice2 = new Invoice();
         invoice2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
         invoice2.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));
        let spy = jest.spyOn(invoice, 'MergeInvoices');

        expect(invoice.MergeInvoices(invoice2)).toEqual([
            {"Cost": 1.99, "Description": "Peer", "InvoiceLineId": 1, "Quantity": 20}, {"Cost": 5.29, "Description": "Orange", "InvoiceLineId": 2, "Quantity": 4}, {"Cost": 9.99, "Description": "Banana", "InvoiceLineId": 3, "Quantity": 1}
        ]);

        spy.mockRestore();
    });

    test('Clone invoice', () => {
        let invoice = new Invoice(
            new Date(),
            "1000",
            [
                new InvoiceLine(1, 10.21, 1, "Orange")
            ]);
        
        let spy = jest.spyOn(invoice, 'Clone');
        const clonedInvoice = invoice.Clone();
        expect(clonedInvoice.LineItems).toEqual([{"Cost": 10.21, "Description": "Orange", "InvoiceLineId": 1, "Quantity": 1}]);

        spy.mockRestore();
    });

    
    



