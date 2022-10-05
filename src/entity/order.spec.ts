import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Order ID is required");
    })

    it("should throw error when customerID is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("Customer ID is required");
    })

    it("should throw error when items is empty", () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Items are required");
    })

    it("should calculate total", () => {

        const item = new OrderItem("i1", "item 1", 100, "p1", 2);
        const item2 = new OrderItem("i2", "item 2", 200, "p2", 2);
        const order = new Order("o1", "c1", [item]);

        let total = order.total();

        expect(total).toBe(200);

        const order2 = new Order("o2", "c1", [item, item2]);
        total = order2.total();
        expect(total).toBe(600);
    })

    it("should throw error if the item quantity is less or equal 0", () => {

        
        expect(()=> {
            const item = new OrderItem("i1", "item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item]);
    
            let total = order.total();

        }).toThrowError("Quantity must be greater than 0");
    })
})