import UbuntuWindow from "./UbuntuWindow";

function ReadmeWindow({ title, children, path}) {
  return (
    <UbuntuWindow title={title} path={path}>
      <div className="text-neutral-200 space-y-6 leading-relaxed">
        {children}
      </div>
    </UbuntuWindow>
  );
}

export default ReadmeWindow;