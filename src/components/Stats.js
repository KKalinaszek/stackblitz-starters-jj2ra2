import React from 'react';

const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good / total) * 100;

    if (total === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />

                    <Statistic text="all" value={total} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} />
                </tbody>
            </table>
        </div>
    );
};

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

export default Stats;