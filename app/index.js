const customer = {
  firstName: "Sara",
  lastName: "Nurestani",
  id: 1234,
  phoneNumber: "0712341234",
  email: "saranurestani@gmail.com",
};

customer.address = {
  street: "street lane",
  city: "london",
  state: "middlesex",
  zipCode: "123456",
};

console.log(`Welcome, ${customer.firstName} ${customer.lastName}!`);

const product = {
  name: "Sara",
  price: 12,
  description: "nice",
  quantity: 34,
};

const total = product.price * 34;

console.log(total >= 100);

product.quantity -= 7;
product.quantity -= 7;
