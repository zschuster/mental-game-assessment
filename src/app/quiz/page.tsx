export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Mental Fitness Assessment
          </h1>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Question 1 of 10</h2>

            <p className="text-lg mb-6">
              How would you rate your current stress level?
            </p>

            <div className="space-y-4">
              <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="stress" value="1" className="mr-3" />
                <span>Very Low - I feel completely relaxed</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="stress" value="2" className="mr-3" />
                <span>Low - I feel mostly calm</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="stress" value="3" className="mr-3" />
                <span>Moderate - Some stress but manageable</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="stress" value="4" className="mr-3" />
                <span>High - I feel quite stressed</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="stress" value="5" className="mr-3" />
                <span>Very High - I feel extremely stressed</span>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Next Question
              </button>
            </div>

            {/* Results */}
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <a href="/results">Results</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
