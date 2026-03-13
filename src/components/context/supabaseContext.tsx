// import { createClient } from "@supabase/supabase-js";
// import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
// 
// // ###for later: can you import type like this?
// import type { SupabaseClient, User, Session } from "@supabase/supabase-js";
// 
// type SupabaseContextType = {
//     supabase: SupabaseClient;
//     user: User | null;
//     session: Session | null;
//     loading: boolean;
// };
// 
// const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);
// 
// export function SupabaseProvider({ children }: { children: ReactNode }) {
//     const [user, setUser] = useState<User | null>(null);
//     const [session, setSession] = useState<Session | null>(null);
//     const [loading, setLoading] = useState(true);
// 
//     const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//     const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
//     const supabase = createClient(supabaseUrl, supabaseKey);
// 
//     // ### reverse engineer this
//     useEffect(() => {
// 
//         //get if user present
//         supabase.auth.getSession()
//             .then(({ data: { session } }) => {
//                 setSession(session);
//                 setUser(session?.user ?? null);
//                 setLoading(false);
//             })
// 
//         let prevSessionId: string | null = null;
// 
//         const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
//             const currentSessionId = session?.access_token || null;
// 
//             if (event === 'SIGNED_IN' && currentSessionId === prevSessionId) {
//                 return;
//             }
//             console.log(`Auth state changed :::  ${event}`);
//             setSession(session);
//             setUser(session?.user ?? null);
//             setLoading(false);
//             prevSessionId = currentSessionId;
//         });
// 
// 
//         //clean on unmount
//         return () => {
//             listener?.subscription.unsubscribe();
//         }
//     }, [])
// 
//     const value = { supabase, user, session, loading };
// 
//     return <SupabaseContext.Provider value={value}>
//         {children}
//     </SupabaseContext.Provider>
// 
// };
// 
// export function useSupabase() {
//     const context = useContext(SupabaseContext);
//     if (context === undefined) {
//         throw new Error(`useSupabase is undefined`)
//     }
//     return context;
// }