    export interface ApiResponseItem {
      id: number;
      title: string;
      category?: { name: string; slug: string };
      slug: string;
      publication_date?: string;
      cover_image?:string;
    }