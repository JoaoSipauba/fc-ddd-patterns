import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when customer ID is empty", () => {
        expect(() => {
            let costumer = new Customer("", "Joao");
        }).toThrowError("Customer ID is required");
    });

    it("should throw error when customer name is empty", () => {
        expect(() => {
            let costumer = new Customer("123", "");
        }).toThrowError("Customer name is required");
    });

    it("should change name", () => {

        // Arrange
        const costumer = new Customer("123", "Joao");
        
        // Act
        costumer.changeName("Geovanna");

        // Assert
        expect(costumer.name).toBe("Geovanna");
    });

    it("should activate customer", () => {

        // Arrange
        const customer = new Customer("123", "Joao");
        const address = new Address("Street 1", 19, "65064-443", "São Luis");
        customer.Address = address;

        // Act
        customer.activate()

        // Assert
        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {

        // Arrange
        const customer = new Customer("123", "Joao");

        // Act
        customer.deactivate()

        // Assert
        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined when you activate a customer", () => {

        expect(() => {
            const customer = new Customer("123", "Joao");
            customer.activate()
        }).toThrowError("Address is mandatory to activate a customer")
    });
})