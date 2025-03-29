// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_API;

// export async function getCategoryPosts(categorySlug: string, page: number = 1, pageSize: number = 10) {
//     try {
//       const start = (page - 1) * pageSize; 
//       const response = await axios.get(
//         `${API_URL}?filters[category][slug][$eq]=${categorySlug}&populate=*&pagination[start]=${start}&pagination[limit]=${pageSize}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching category posts:", error);
//       throw new Error("Failed to fetch category posts");
//     }
//   }

// export async function getPost(slug: string) {
//   try {
//     const response = await axios.get(
//       `${API_URL}?filters[slug][$eq]=${slug}&populate=*`
//     );
//     if (response.data.data && response.data.data.length > 0) {
//       return response.data.data[0];
//     }
//     return null;
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw new Error("Failed to fetch post");
//   }
// }

// export async function getLatestNews(limit: number = 5) {
//   try {
//     const response = await axios.get(
//       `${API_URL}?sort[0]=createdAt:desc&pagination[limit]=${limit}&populate=*`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching latest news:", error);
//     throw new Error("Failed to fetch latest news");
//   }
// }

// export async function getBreakingNews() {
//   try {
//     const response = await axios.get(
//       `${API_URL}?filters[breaking_news][$eq]=true&sort[0]=createdAt:desc&pagination[limit]=1&populate=*`
//     );
//     if (response.data.data && response.data.data.length > 0) {
//       return response.data.data[0]; 
//     }
//     return null; 
//   } catch (error) {
//     console.error("Error fetching breaking news:", error);
//     throw new Error("Failed to fetch breaking news");
//   }
// }


import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_API;

export async function getCategoryPosts(categorySlug: string, page: number = 1, pageSize: number = 1, title?: string) {
    try {
      const start = (page - 1) * pageSize; 
      const titleFilter = title ? `&filters[title][$containsi]=${encodeURIComponent(title)}` : "";
      const response = await axios.get(
        `${API_URL}?filters[category][slug][$eq]=${categorySlug}${titleFilter}&populate=*&pagination[start]=${start}&pagination[limit]=${pageSize}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching category posts:", error);
      throw new Error("Failed to fetch category posts");
    }
  }

export async function getPost(slug: string) {
  try {
    const response = await axios.get(
      `${API_URL}?filters[slug][$eq]=${slug}&populate=*`
    );
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0];
    }
    return null;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
}

export async function getLatestNews(limit: number = 5) {
  try {
    const response = await axios.get(
      `${API_URL}?sort[0]=createdAt:desc&pagination[limit]=${limit}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw new Error("Failed to fetch latest news");
  }
}

export async function getBreakingNews() {
  try {
    const response = await axios.get(
      `${API_URL}?filters[breaking_news][$eq]=true&sort[0]=createdAt:desc&pagination[limit]=1&populate=*`
    );
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0]; 
    }
    return null; 
  } catch (error) {
    console.error("Error fetching breaking news:", error);
    throw new Error("Failed to fetch breaking news");
  }
}