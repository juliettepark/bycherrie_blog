export default function SectionHeader({ title, text }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-center space-y-2">{title}</h2>
      <p className="text-primary-500 font-medium">{text}</p>
    </div>
  );
}
