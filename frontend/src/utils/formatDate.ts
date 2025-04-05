export function formatDate(dateString: string | Date): string {
    if (!dateString) {
      return '';
    }
    
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return '';
    }
    
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    
    return date.toLocaleDateString('pl-PL', options);
  }