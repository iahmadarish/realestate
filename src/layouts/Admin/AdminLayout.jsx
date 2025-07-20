import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Admin Sidebar - placeholder */}
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/admin" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Users
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Admin Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
