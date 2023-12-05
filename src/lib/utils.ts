import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeDate(inputDate: string): string {
  const now = new Date();
  const date = new Date(inputDate);
  const timeDifference = now.getTime() - date.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} seconds ago`;
  } else if (secondsDifference < 3600) {
    const minutesDifference = Math.floor(secondsDifference / 60);
    return `${minutesDifference} minute${minutesDifference === 1 ? '' : 's'} ago`;
  } else if (secondsDifference < 86400) {
    const hoursDifference = Math.floor(secondsDifference / 3600);
    return `${hoursDifference} hour${hoursDifference === 1 ? '' : 's'} ago`;
  } else {
    const daysDifference = Math.floor(secondsDifference / 86400);
    return `${daysDifference} day${daysDifference === 1 ? '' : 's'} ago`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};