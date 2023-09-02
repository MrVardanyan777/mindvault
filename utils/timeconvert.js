export function formatTimeAgo(date) {
    const currentDate = new Date();
    const createdAtDate = new Date(date);
    const timeDifference = currentDate - createdAtDate;
    
    if (timeDifference < 60000) { // Less than 1 minute
      const seconds = Math.floor(timeDifference / 1000);
      return `${seconds} seconds ago`;
    } else if (timeDifference < 3600000) { // Less than 1 hour
      const minutes = Math.floor(timeDifference / 60000);
      return `${minutes} minutes ago`;
    } else if (timeDifference < 86400000) { // Less than 1 day
      const hours = Math.floor(timeDifference / 3600000);
      return `${hours} hours ago`;
    } else { // More than 1 day
      const days = Math.floor(timeDifference / 86400000);
      return `${days} days ago`;
    }
  }
