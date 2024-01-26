"use client"


import React, { useState } from 'react';

interface EditableSectionProps {
  onSave: (content: string) => void;
}

const EditableSection: React.FC<EditableSectionProps> = ({ onSave }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(content);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#90EE90', 
    padding: '8px',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute', 
    top: '10px',
    right: '10px',
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '500px',
    margin: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div
        contentEditable={true}
        onInput={(e) => setContent(e.currentTarget.textContent || '')}
        style={{ border: '1px solid #ddd', minHeight: '600px' }}
      ></div>
      <button onClick={handleSave} style={buttonStyle}>
        Save
      </button>
    </div>
  );
};

export default EditableSection;
