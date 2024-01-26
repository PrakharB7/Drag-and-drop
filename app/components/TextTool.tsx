"use client"

import React, { useRef, useState } from 'react';

const Toolbar: React.FC = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const textDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', 'Text');
  };

  const imageButtonClick = (fileInput: HTMLInputElement | null) => {
    if (fileInput) {
      fileInput.click();
    }
  };

  const imageDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const imageUrl = selectedImageUrl;
    if (imageUrl) {
      e.dataTransfer.setData('text/plain', imageUrl);
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageUrl(imageUrl);
    }
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#FFFF00', 
    padding: '8px',
    borderRadius: '4px',
    marginTop: "5px",
    color: 'black',
    cursor: 'grab', 
    marginRight: '10px',
    display: 'inline-block',
  };

  const fileInputStyle: React.CSSProperties = {
    display: 'none',
  };

  const imageDivStyle: React.CSSProperties = {
    ...buttonStyle,
  
   
 
  };

  const imageLabelStyle: React.CSSProperties = {
    marginTop: '5px', 
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const imageInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div
        draggable={true}
        onDragStart={textDragStart}
        style={buttonStyle}
      >
        Text
      </div>
      <div
        style={{ ...imageDivStyle }}
        onClick={() => imageButtonClick(imageInputRef.current)}
        draggable={true}
        onDragStart={imageDragStart}
      >
        {selectedImageUrl && (
          <>
            <span style={imageLabelStyle}>Image</span>
            <img src={selectedImageUrl} alt="Selected" style={imageStyle} />
          </>
        )}
        Image
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageInputChange}
        style={fileInputStyle}
        ref={imageInputRef}
      />
    </div>
  );
};

export default Toolbar;
