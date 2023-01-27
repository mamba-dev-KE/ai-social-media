import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100ch-73px)]">
      {children}
    </main>
  );
};

export default Main;
