export type Variant = "primary" | "secondary";
export type Size = "small" | "medium" | "large";

export type SmltButtonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
};

export type SmltButtonEmits = (e: "click", event: MouseEvent) => void;
