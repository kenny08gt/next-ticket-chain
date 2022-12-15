import { getSession, signIn, signOut } from "next-auth/react";

// export function AuthWrapper({ children }) {
//   const [loggedIn, setLoggedIn] = useState<Session | null>(null);
//   const { connectAsync } = useConnect();
//   const { disconnectAsync } = useDisconnect();
//   const { isConnected } = useAccount();
//   const { signMessageAsync } = useSignMessage();
//   const { requestChallengeAsync } = useAuthRequestChallengeEvm();

export async function getUserFromSession() {
  const session = await getSession();

  // redirect if not authenticated
  if (!session) {
    return null;
  }

  return session;
}

// export function useAuthContext() {
//   return useContext(AuthContext);
// }
