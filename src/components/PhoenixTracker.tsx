"use client";

import { useEffect } from "react";

/**
 * PhoenixTracker Component
 * 
 * Handles iframe communication for Phoenix tracking toggle functionality.
 * This component listens for messages from the parent frame and forwards
 * commands to the tracking client.
 */
export function PhoenixTracker() {
  useEffect(() => {
    console.log('🎯 PhoenixTracker component mounted - ready for iframe communication');
    
    // Listen for messages from parent frame (toggle commands)
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'phoenix-command') {
        console.log('📨 PhoenixTracker received command:', event.data);
        
        // Forward command to tracking client
        if (typeof window !== 'undefined' && (window as any).__PHOENIX_TRACKING__) {
          const trackingClient = (window as any).__PHOENIX_TRACKING__;
          if (trackingClient.handleCommand) {
            trackingClient.handleCommand(event.data);
          }
        } else {
          console.warn('⚠️ Phoenix tracking client not found - command ignored');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Send ready message to parent frame
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: 'phoenix-tracker-ready',
        projectId: '565d7543-07ff-4def-8333-1bb282be4a01',
        timestamp: Date.now()
      }, '*');
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return null;
}