import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type Reply = {
  mutateType: 'add' | 'modify' | 'delete' | null;
  setMutateType: Dispatch<SetStateAction<'add' | 'modify' | 'delete' | null>>;
};

const ReplyContext = createContext<Reply | null>(null);

export function ReplyContextProvider({ children }: { children: React.ReactNode }) {
  const [mutateType, setMutateType] = useState<'add' | 'modify' | 'delete' | null>(null);

  return <ReplyContext.Provider value={{ mutateType, setMutateType }}>{children}</ReplyContext.Provider>;
}

export const useReplyContext = () => useContext(ReplyContext)!;
