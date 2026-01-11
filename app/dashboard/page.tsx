export default function Page() {
  return (
    <>
          {/* HEADER */}
          <header className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
              <p className="text-sm text-gray-500">Overview & recent activity</p>
            </div>
          </header>

          {/* CONTENT */}
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-lg hover:bg-gray-50 transition">
                <div className="text-lg font-medium text-gray-800">Analytics</div>
                <div className="text-sm text-gray-600">Brief summary and metrics.</div>
              </div>

              <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-lg hover:bg-gray-50 transition">
                <div className="text-lg font-medium text-gray-800">Usage</div>
                <div className="text-sm text-gray-600">Usage statistics and trends.</div>
              </div>

              <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-lg hover:bg-gray-50 transition">
                <div className="text-lg font-medium text-gray-800">Integrations</div>
                <div className="text-sm text-gray-600">Connected services and status.</div>
              </div>

              <div className="md:col-span-3 bg-white shadow-sm rounded-xl p-6 mt-2 hover:shadow-lg hover:bg-gray-50 transition">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-medium text-gray-800">Activity Feed</div>
                    <div className="text-sm text-gray-600 mt-1">Latest updates from your workspace.</div>
                  </div>
                  <div className="text-xs text-gray-500">Updated 2m ago</div>
                </div>
              </div>
            </div>
          </main>
        </>
  );
}
