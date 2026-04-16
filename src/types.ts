import React from 'react';

export type AppId = 'ai-tutor' | 'notepad' | 'browser' | 'syllabus' | 'quiz' | 'settings';

export type SnapState = 'none' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  snapState?: SnapState;
  zIndex: number;
  position?: { x: number; y: number };
  size?: { width: number | string; height: number | string };
}

export interface AppConfig {
  id: AppId;
  name: string;
  icon: React.ReactNode;
  component: React.ComponentType<{ onClose: () => void }>;
}
