import React, { Component } from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map((option) => {
        return (<button type="button" key={option} className="button" onClick={() => { onLeaveFeedback(option) }}>
    {option}
  </button>)
 })
    
    
    
}
