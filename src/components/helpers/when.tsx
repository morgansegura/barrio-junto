type Props = {
  condition: boolean;
  children: React.ReactNode;
};

export function When({ condition, children }: Props) {
  return condition ? <>{children}</> : null;
}
