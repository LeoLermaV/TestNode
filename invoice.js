class Invoice {
    constructor(InvoiceDate = new Date(), InvoiceNumber = "", LineItems = []) {
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNumber = InvoiceNumber;
        this.LineItems = LineItems;
    }

    /**
     * Adds a line to invoice
     * @param {Object} line - a line to add
    */
    AddInvoiceLine(line) {
        this.LineItems.push(line);
        return this.LineItems
    };

    /**
     * Removes a line
    */
    RemoveInvoiceLine(id) {
        this.LineItems.splice(id,1);
        return this.LineItems
    };
    /**
     * Get total Cost of Items
     */
    GetTotal() {
        
        let total = this.LineItems.reduce((a, {Cost}) => a + Cost, 0);
        let totalWithDecimals = parseFloat(total).toFixed(2);
        return totalWithDecimals
    };
    /** 
     * Merge two existing Invoices into one
    */
    MergeInvoices(invoice2) {
        this.LineItems = this.LineItems.concat(invoice2.LineItems)
        return this.LineItems
    }
    /**
     * Clone first invoice into a new invoice
     */
    Clone(invoice) {
        let props = this;
        const ClonedInvoice  = Object.assign( Object.create( Object.getPrototypeOf(this)), this)
        return ClonedInvoice
    };
}

module.exports = Invoice;