type Props = {
  children: string;
};

export function PageTitle({ children }: Props) {
  return (
    <h1 className="text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
