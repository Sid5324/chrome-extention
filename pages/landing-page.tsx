import React from 'react';
import { Globe, Star, Clock, Shield, Users, Search, Map, Heart, Zap, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "Real-time Reviews",
      description: "Access instant travel insights while you browse. Our extension automatically fetches and displays the most recent reviews, ensuring you're always getting the latest feedback from fellow travelers.",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-700"
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "Smart Filtering",
      description: "Cut through the noise with our intelligent filtering system. We analyze and prioritize travel-specific content, helping you focus on what matters most for your journey.",
      bgColor: "bg-amber-50",
      accentColor: "text-amber-700"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-500" />,
      title: "Multi-platform Integration",
      description: "Seamlessly aggregate reviews from Reddit, TripAdvisor, Yelp, and more. Get a comprehensive view of traveler experiences from across the web in one convenient location.",
      bgColor: "bg-teal-50",
      accentColor: "text-teal-700"
    },
    {
      icon: <Search className="w-6 h-6 text-rose-500" />,
      title: "Clean Interface",
      description: "Enjoy a beautiful, minimalist design that presents information clearly without overwhelming you. Our intuitive layout makes finding relevant reviews a breeze.",
      bgColor: "bg-rose-50",
      accentColor: "text-rose-700"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Authentic Content",
      description: "Access genuine, unfiltered reviews from real travelers worldwide. Our platform prioritizes authentic experiences over sponsored content.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Privacy-Focused",
      description: "Your privacy matters. We never collect personal data or track your browsing history. Travel research should be secure and private.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Time-Efficient",
      description: "Save hours of research by having all reviews consolidated in one place. No more tab switching or endless scrolling.",
      bgColor: "bg-orange-50"
    }
  ];

  const useCases = [
    {
      icon: <Map className="w-6 h-6 text-cyan-500" />,
      title: "Destination Planning",
      description: "Research your next destination with confidence by accessing real experiences from fellow travelers."
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Hidden Gems",
      description: "Discover local secrets and off-the-beaten-path locations that traditional travel guides might miss."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-violet-500" />,
      title: "Travel Tips",
      description: "Get practical advice and recommendations from experienced travelers who've been there."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl md:text-7xl">
              Community Reviews
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
              Transform your travel research with authentic, community-sourced reviews directly in your Google search results.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:flex-col sm:items-center md:mt-8">
              <div className="flex gap-4 w-full">
                <div className="rounded-md shadow flex-1">
                  <a href="https://drive.google.com/drive/folders/1YUhafkp05zs2ilDzp3ESuMOsWsOzsysD?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                    Add to Chrome - It's Free!
                  </a>
                </div>
                <div className="rounded-md shadow flex-1">
                  <a href="https://forms.gle/9S3BzXgyQnbHygpK8" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                    Feedback Forum
                  </a>
                </div>
              </div>
              <p className="mt-2 text-red-600 text-sm font-medium">Under Close Beta</p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Powerful Features for Smart Travelers
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to make informed travel decisions, right at your fingertips.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className={`flow-root ${feature.bgColor} rounded-lg px-6 pb-8 h-full`}>
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                        {feature.icon}
                      </div>
                      <h3 className={`mt-8 text-xl font-semibold ${feature.accentColor} tracking-tight`}>
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Perfect for Every Type of Traveler
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Whether you're a seasoned explorer or planning your first trip, Community Reviews has you covered.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-md">
                    {useCase.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
              Why Choose Community Reviews
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Built with travelers in mind, focusing on what matters most to you.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="pt-6">
                  <div className={`flow-root ${benefit.bgColor} rounded-lg px-6 pb-8 h-full shadow-lg`}>
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                        {benefit.icon}
                      </div>
                      <h3 className="mt-8 text-xl font-semibold text-gray-900 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Travel Research?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join thousands of travelers who've already enhanced their travel planning experience.
            </p>
            <div className="mt-8">
              <div className="rounded-md shadow">
                <a href="https://drive.google.com/drive/folders/1YUhafkp05zs2ilDzp3ESuMOsWsOzsysD?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300">
                  Add to Chrome - Start Exploring
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

