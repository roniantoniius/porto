const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-batik-accent/20 rounded-full"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-transparent border-t-batik-accent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-batik-accent font-bold">
          RS
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner

