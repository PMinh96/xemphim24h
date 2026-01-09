const API_URL = process.env.NEXT_PUBLIC_API_URL

// mock data tạm
const MOCK_MOVIES = [
  { id: 1, title: 'Avengers: Endgame' },
  { id: 2, title: 'Spider-Man: No Way Home' },
  { id: 3, title: 'Batman' },
]

export async function fetchAPI<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {

  // 👉 TẠM THỜI MOCK
  if (url === '/movies') {
    return MOCK_MOVIES as T
  }

  // 👉 SAU NÀY XÓA ĐOẠN TRÊN LÀ XONG
  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('API error')
  }

  return res.json()
}
