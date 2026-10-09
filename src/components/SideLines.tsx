const SideLines: React.FC = () => (
    <>
        <div className="fixed inset-y-0 left-4 w-px bg-accent/40 animate-shimmer pointer-events-none" aria-hidden="true" />
        <div className="fixed inset-y-0 left-7 w-[3px] bg-accent/60 animate-shimmer-slow pointer-events-none" aria-hidden="true" />
        <div className="fixed inset-y-0 right-4 w-px bg-accent/40 animate-shimmer pointer-events-none" aria-hidden="true" />
        <div className="fixed inset-y-0 right-7 w-[3px] bg-accent/60 animate-shimmer-slow pointer-events-none" aria-hidden="true" />
    </>
);

export default SideLines;
