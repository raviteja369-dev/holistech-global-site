/**
 * PageBackground — Simple background using PNG image only
 */

const PageBackground = () => {
  return (
    <div className="page-bg-fixed" aria-hidden="true">
      {/* Only the PNG image background */}
      <div className="page-bg-gradient" />
    </div>
  );
};

export default PageBackground;
