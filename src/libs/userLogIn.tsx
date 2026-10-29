export default async function userLogIn(
  userEmail: string,
  userPassword: string,
) {
  const response = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    },
  );

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  const data = await response.json();
  return data;
}
