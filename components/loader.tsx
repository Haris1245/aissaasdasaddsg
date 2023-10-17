export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-7 h-7 relative animate-spin">
        <img alt="logo" src="/icon.svg" fill />
      </div>
      <p className="text-sm text-muted-foreground">The Winner is generaing</p>
      <p className="text-xs text-muted-foreground">
        It may take sometime to boot the model
      </p>
    </div>
  );
};
