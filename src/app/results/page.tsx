export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Your Mental Fitness Results
          </h1>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold mb-4">
              Overall Score: 75/100
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              You're doing well! Your mental fitness is in the good range with
              room for improvement.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                  Strengths
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-200 mt-2">
                  <li>• Good stress management</li>
                  <li>• Strong social connections</li>
                  <li>• Healthy sleep habits</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100">
                  Areas to Improve
                </h3>
                <ul className="text-sm text-orange-700 dark:text-orange-200 mt-2">
                  <li>• Work-life balance</li>
                  <li>• Time management</li>
                  <li>• Mindfulness practice</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">
                Personalized Recommendations
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Based on your responses, we recommend focusing on establishing a
                consistent mindfulness practice and setting clearer boundaries
                between work and personal time.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              Retake Assessment
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
