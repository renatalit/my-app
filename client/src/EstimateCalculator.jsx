import React, { useState } from 'react';
import axios from 'axios';

const EstimateCalculator = () => {
    const questions = [
        { text: "What type of equipment are you certifying?", options: ["Consumer Electronics", "Kitchen Appliances", "Industrial Equipment"] },
        { text: "What is the size of your equipment?", options: ["Small", "Medium", "Large"] },
        { text: "What is the voltage of your equipment?", options: ["0-50 V", "50-300 V", "Above 300 V"] },
        { text: "How many component does your equipment have?", options: ["Below 50", "50-200", "Above 200"] },
        { text: "How many certifications are you looking to obtain for this equipment?", options: ["1-2", "3-4", "5"] },
    ];

    const [answers, setAnswers] = useState(Array(5).fill("low"));
    const [price, setPrice] = useState(null);

    // Handle answer selection
    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };


    // Submit answers to backend
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate-price', { answers });
            setPrice(response.data.price);
        } catch (error) {
            console.error("Error calculating price:", error);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            
            {questions.map((question, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
                    <p>{question.text}</p>
                    <select value={answers[index]} onChange={(e) => handleAnswerChange(index, e.target.value)}>
                        {question.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={["low", "medium", "high"][optionIndex]}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <button onClick={handleSubmit} style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>Calculate Price</button>
            {price !== null && (
                <h3 style={{ marginTop: "20px" }}>Estimated Price: ${price}</h3>
            )}
        </div>
    );
};

export default EstimateCalculator;
