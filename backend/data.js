import bcrypt from 'bcryptjs';

const data = {

    users: [

        {
            name: 'Adesh',
            email: 'test@email.com',
            password: bcrypt.hashSync('Testing123'),
            isAdmin: true,
        },

        {
            name: 'user1',
            email: 'user1@email.com',
            password: bcrypt.hashSync('Testing123'),
            isAdmin: false,
        }


    ],
    products: [
      {
        // _id: '1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        // _id: '2',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-Pant',
        category: 'Pants',
        image: '/images/p2.jpg',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id: '4',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/p4.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;
  