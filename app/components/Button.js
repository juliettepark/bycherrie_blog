export function FilledButton({ children, style }) {
  return (
    <DefaultButton
      style={`bg-cherrie border-secondary text-primary md:hover:bg-transparent md:hover:border-cherrie md:hover:text-cherrie ${style}`}
    >
      {children}
    </DefaultButton>
  );
}

export function OutlinedButton({ children }) {
  return (
    <DefaultButton style="border-primary-200 text-primary-200 md:hover:border-primary-400 md:hover:text-primary-400">
      {children}
    </DefaultButton>
  );
}

export function DefaultButton({ children, style }) {
  return (
    // put with backticks so that we can pass in styles from other buttons
    <button
      className={`inline font-medium border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
    >
      {children}
    </button>
  );
}
