export function getTimeAgo(dateString: string): string {
    if (!dateString) return 'Brak daty';
    
    const now = new Date();
    const publishDate = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - publishDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${getPluralForm(diffInMinutes, 'minuta', 'minuty', 'minut')} temu`;
    } else if (diffInMinutes < 1440) { 
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} ${getPluralForm(hours, 'godzina', 'godziny', 'godzin')} temu`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} ${getPluralForm(days, 'dzień', 'dni', 'dni')} temu`;
    }
  }

function getPluralForm(number: number, form1: string, form2: string, form5: string): string {
    if (number === 1) {
      return form1;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return form2;
    } else {
      return form5;
    }
  }
  