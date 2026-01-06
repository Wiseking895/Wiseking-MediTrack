const LandingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="animate-pulse text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          MediTrack
        </h1>
        <p className="mt-2 text-gray-500">
          Loading healthcare experience...
        </p>
      </div>
    </div>
  );
};

export default LandingAnimation;
