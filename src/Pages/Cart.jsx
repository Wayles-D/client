import React, { useContext } from 'react';
import deleteIcon from "../assets/deleteIcon.svg";
import CartContext from '../Context/CartContext';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    function handleRemove(cartId) {
        let remove = cart.filter(cartItx => cartItx._id !== cartId);
        setCart(remove);
    }

    const handleInc = (productId) => {
        const incQty = cart.map(cartItx => 
            cartItx._id === productId 
                ? { ...cartItx, quantity: cartItx.quantity + 1 } 
                : cartItx
        );
        setCart(incQty);
    };

    const handleDec = (itemId) => {
        const decQty = cart.map(cartItx => {
            if (cartItx._id === itemId) {
                if (cartItx.quantity === 1) {
                    return cartItx; // Don't decrease if quantity is 1
                }
                return { ...cartItx, quantity: cartItx.quantity - 1 };
            }
            return cartItx;
        });
        setCart(decQty);
    };

    const totalPrice = cart.reduce((total, product) => total + Number(product.price) * product.quantity, 0);

    return (
        <main className='container mx-auto bg-[#1E1E1E] text-white min-h-screen p-10'>
            {cart.length === 0 ? (
                <h1 className='text-center text-xl font-bold'>😞 Oops! Looks like you haven’t ordered yet. How about you search for something? 🙂‍↔️ </h1>
            ) : (
                <div className='grid lg:grid-cols-3 gap-8'>
                    <section className='col-span-2 bg-[#2F2F2F] p-6 rounded-lg shadow-lg'>
                        <h1 className='text-xl font-bold mb-4'>Carts ({cart.length})</h1>
                        <div>
                            {cart.map(({ _id, image, title, price, quantity }) => (
                                <div key={_id} className='p-4 bg-[#252422] rounded-lg mb-4'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
                                        {/* Image & Details */}
                                        <div className='flex items-center gap-4'>
                                            <img src={image} alt={title} className='w-20 h-20 rounded-lg' />
                                            <div>
                                                <h2 className='font-semibold'>{title}</h2>
                                                <p className="text-gray-400 text-sm">{new Date().toLocaleDateString("en-GB")}</p>
                                                <h3 className='text-yellow-400'>₦{Number(price).toLocaleString()}</h3>
                                            </div>
                                        </div>

                                        {/* Buttons (Moved Below on Mobile) */}
                                        <div className='flex flex-col sm:flex-row  gap-2 mt-3 sm:mt-0'>
                                            <div className='flex  gap-2'>
                                                <button className='bg-yellow-500 text-black px-3 py-1 rounded-full' onClick={() => handleInc(_id)}>+</button>
                                                <p className='font-bold'>{quantity}</p>
                                                <button 
                                                    className={`bg-yellow-500 text-black px-3 py-1 rounded-full ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                                    onClick={() => handleDec(_id)} 
                                                    disabled={quantity === 1}
                                                >
                                                    -
                                                </button>
                                            <img src={deleteIcon} alt='Delete' className='cursor-pointer w-6 ml-auto' onClick={() => handleRemove(_id)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className='bg-[#252422] p-6 rounded-lg shadow-lg h-80'>
                        <h1 className='text-xl font-bold mb-4'>Summary</h1>
                        <div className='space-y-2'>
                            <div className='flex justify-between'>
                                <h3>Product Total ({cart.length})</h3>
                                <h3 className='text-yellow-500'>₦{totalPrice.toLocaleString()}</h3>
                            </div>
                            <div className='flex justify-between'>
                                <h3>VAT</h3>
                                <h3 className='text-yellow-500'>₦1,000</h3>
                            </div>
                            <div className='flex justify-between'>
                                <h3>Delivery</h3>
                                <h3 className='text-yellow-500'>₦1,500</h3>
                            </div>
                            <hr className='border-gray-600 my-2' />
                            <div className='flex justify-between font-bold text-lg'>
                                <h1>Total</h1>
                                <h1 className='text-green-500'>₦{(totalPrice + 2500).toLocaleString()}</h1>
                            </div>
                        </div>
                        <button className='w-full bg-yellow-500 text-black py-3 mt-4 rounded-lg font-bold'>Check Out</button>
                    </section>
                </div>
            )}
        </main>
    );
};

export default Cart;
