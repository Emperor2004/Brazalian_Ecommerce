// Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { executeCustomQuery } from '../utils/queryUtils';  // Import the utility function
import freqQueries from '../utils/freqQueries.json'
import logo from '../assets/images/logo.png'

const Home = () => {
    const location = useLocation();
    const [queryResult, setQueryResult] = useState(location.state?.queryResult || []);
    const [error, setError] = useState(location.state?.error || null);
    const navigate = useNavigate();
    const [customQuery, setCustomQuery] = useState('');
    const [queryStatement, setQueryStatement] = useState('Top 5 Customer Details');

    // Fetch initial customer data
    useEffect(() => {
        try {
            setCustomQuery('SELECT * FROM customers_dataset LIMIT 5');
        } catch (error) {

        }
    }, []);

    // Handle custom query submission
    const handleQuerySubmit = async (query) => {
        setError(null);
        navigate(`/custom-query?query=${query}`)
        try {
            const result = await executeCustomQuery(query);
            setQueryResult(result);
            console.log("Query Result:", result);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <div className='bg-gray-950 w-[100%] h-[5%] flex items-center justify-start pl-8 overflow-'>
                <div className='bg-gray-900 h-15 w-15 flex items-center justify-center rounded-full m-4'>
                    <img className='rounded-full h-10 w-10' src={logo} alt="" />
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM customers_dataset LIMIT 5');
                    setQueryStatement('Top 5 Customer Details');
                    handleQuerySubmit('SELECT * FROM customers_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Customers</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM geolocation_dataset LIMIT 5');
                    setQueryStatement('Top 5 Geolocation Details');
                    handleQuerySubmit('SELECT * FROM geolocation_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Geolocation</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM orders_dataset LIMIT 5');
                    setQueryStatement('Top 5 Order Details');
                    handleQuerySubmit('SELECT * FROM orders_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Orders</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM order_items_dataset LIMIT 5');
                    setQueryStatement('Top 5 Order Item Details');
                    handleQuerySubmit('SELECT * FROM order_items_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Order Items</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM order_reviews_dataset LIMIT 5');
                    setQueryStatement('Top 5 Order Review Details');
                    handleQuerySubmit('SELECT * FROM order_reviews_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Order Reviews</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM order_payments_dataset LIMIT 5');
                    setQueryStatement('Top 5 Order Payment Details');
                    handleQuerySubmit('SELECT * FROM order_payments_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Payments</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM products_dataset LIMIT 5');
                    setQueryStatement('Top 5 Product Details');
                    handleQuerySubmit('SELECT * FROM products_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Products</p>
                </div>
                <div onClick={() => {
                    setCustomQuery('SELECT * FROM sellers_dataset LIMIT 5');
                    setQueryStatement('Top 5 Seller Details');
                    handleQuerySubmit('SELECT * FROM sellers_dataset LIMIT 5')
                }
                } className='hover:bg-gray-900 bg-gray-800 h-10 flex items-center justify-center rounded-full p-5 m-4 cursor-pointer'>
                    <p className='text-white'>Sellers</p>
                </div>
            </div>
            <div className='flex w-full items-center justify-center'>
                <p className='font-semibold text-8xl font-serif italic'>BRAZILIAN E-COMMERCE</p>
            </div>
            <div className="overflow-auto flex bg-gray-900 text-white m-5 p-5 rounded-2xl">
                {/* Left side: Query Form */}
                <div className="p-5 bg-gray-950 rounded-lg">
                    <h2 className="text-xl mb-4 text-blue-300">Execute Custom SQL Query</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setQueryStatement('Custom Query')
                        handleQuerySubmit(customQuery);
                    }}>
                        <textarea
                            value={customQuery}
                            onChange={(e) => setCustomQuery(e.target.value)}
                            placeholder="Enter your SQL query here"
                            className="w-full p-2 mb-4 text-black rounded"
                            rows="5"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600"
                        >
                            Execute Query
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <div className="mt-4">
                        <p>Example Queries</p>
                        {freqQueries.map(({ name, query }) => (
                            <div key={name} onClick={() => {
                                setCustomQuery(query);
                                setQueryStatement(name);
                                handleQuerySubmit(query);
                            }}
                            className='hover:bg-gray-900 bg-gray-800 min-h-5 flex items-center rounded-sm p-2 m-4 cursor-pointer'>
                                <p className='text-white'>{name}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right side: Query Results */}
                <div className="w-2/3 pl-5">
                    <h3 className="text-xl mb-2 font-semibold ">{queryStatement}</h3>
                    <h2 className="text-xl mb-2">Query Results :</h2>
                    {queryResult.length > 0 ? (
                        <table className="min-w-full border-collapse pr-6">
                            <thead>
                                <tr>
                                    {/* Dynamically render column headers based on the result keys */}
                                    {Object.keys(queryResult[0]).map((key) => (
                                        <th key={key} className="border px-4 py-2">
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {queryResult.map((row, index) => (
                                    <tr key={index}>
                                        {Object.values(row).map((value, idx) => (
                                            <td key={idx} className="border px-4 py-2">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No query results to display.</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Home;
