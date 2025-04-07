type Props = {
  children: string;
};

export function TypographyH2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
