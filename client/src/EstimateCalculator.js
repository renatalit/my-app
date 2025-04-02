import React, { useState } from 'react';

function EstimateCalculator() {
    const [amount, setAmount] = useState('');
    const [fee, setFee] = useState(null);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!amount || isNaN(amount)) {
            setError('Please enter a valid amount');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parseFloat(amount) }),
            });
            const data = await res.json();
            setFee(data.fee);
            setTotal(data.total);
            setError('');
        } catch (err) {
            setError('Error calculating the estimate');
        }
    };

    return (
        <div>
            <h2>Estimate Calculator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {error && <p>{error}</p>}
            {fee !== null && total !== null && (
                <div>
                    <p>Fee: ${fee}</p>
                    <p>Total: ${total}</p>
                </div>
            )}
        </div>
    );
}

export default EstimateCalculator;
