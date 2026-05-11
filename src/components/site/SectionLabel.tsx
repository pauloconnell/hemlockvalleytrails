export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
      {index ? <span className="text-muted-foreground mr-2">{index}</span> : null}
      {children}
    </div>
  );
}
