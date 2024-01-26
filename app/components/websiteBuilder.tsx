"use client"
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbar from './TextTool';
import EditableSection from './Editable';

const WebsiteBuilder: React.FC = () => {
    const [currentTool, setCurrentTool] = useState<string | null>(null);
    const [savedSections, setSavedSections] = useState<string[]>([]);
  
    const handleDrop = (tool: string) => {
      setCurrentTool(tool);
    };
  
    const handleSaveSection = (content: string) => {
      setSavedSections([...savedSections, content]);
      setCurrentTool(null);
      console.log('Saved Section:', content);
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex' }}>
       
          <div style={{ flex: '1', backgroundColor: '#87CEEB', height: "800px" }}>
            <Toolbar />
          </div>
  
          <div style={{ flex: '3', backgroundColor: '#B266FF' }}>
            <EditableSection onSave={handleSaveSection} />
          </div>
        </div>
      </DndProvider>
    );
  };
  
  export default WebsiteBuilder;