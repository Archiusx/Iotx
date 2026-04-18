/**
 * SYNC-OS UTILITIES: Centralized helper functions for the system.
 * Includes Tailwind CSS class merging logic (cn) and semantic color mappings.
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
