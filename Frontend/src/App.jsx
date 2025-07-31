import { useEffect, useState } from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 m-4 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Active
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-gray-800 mb-3">{user.Username}</h2>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span className="text-sm">{user.email}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm">{user.Address}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span className="text-sm">{user.Phoneno}</span>
        </div>
        
        {user.Website && (
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
            </svg>
            <a href={user.Website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              {user.Website}
            </a>
          </div>
        )}
        
        {user.Company && (
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">{user.Company}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600 font-medium">Loading applicants...</span>
  </div>
)

const ErrorMessage = ({ error }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
    <div className="flex items-center">
      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
      </svg>
      <p className="text-red-800 font-medium">Error loading applicants: {error}</p>
    </div>
  </div>
)

const EmptyState = () => (
  <div className="text-center p-12">
    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No applicants found</h3>
    <p className="text-gray-500">There are currently no applicants in the system.</p>
  </div>
)

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch("http://localhost:5000/api/user")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
        
      } catch (err) {
        setError(err.message)
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Job <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Applicants</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage and review candidate applications with ease
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage error={error} />}
        
        {!loading && !error && users.length === 0 && <EmptyState />}
        
        {!loading && !error && users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {users.map(user => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        )}

        {/* Stats Footer */}
        {!loading && !error && users.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-gray-700 font-medium">
                {users.length} applicant{users.length !== 1 ? 's' : ''} loaded successfully
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App