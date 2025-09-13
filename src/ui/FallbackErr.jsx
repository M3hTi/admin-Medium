function FallbackErr({ error, resetErrorBoundary }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-red-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <span className="text-2xl">🤨</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Something went wrong!
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>
        </div>

        <div className="rounded-md bg-red-50 border border-red-200 p-4">
          <h3 className="text-sm font-medium text-red-800 mb-2">
            Error Details:
          </h3>
          <p className="text-sm text-red-700 font-mono bg-red-100 p-2 rounded border">
            {error.message}
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    </div>
  );
}

export default FallbackErr;
