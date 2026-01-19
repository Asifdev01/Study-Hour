import { BookOpen, Target, TrendingUp, FolderOpen, Bell, Users, Mail } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customizable Study Plans",
      description: "Tailor your study schedule to fit your unique needs and preferences."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your study hours and stay motivated with visual progress reports."
    },
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: "Resource Management",
      description: "Organize your study materials and access them anytime, anywhere."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Reminders & Notifications",
      description: "Stay on track with timely reminders for your study sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        
        <p className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          About Study Hours
        </p>
        <p className="text-lg mb-10 md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          Empowering Students to Achieve More with Effective Study Management
        </p>
      

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-6 md:p-8 mb-10 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We're on a mission to help students maximize their productivity and achieve their academic goals through structured study schedules and insightful analytics. Study Hours empowers you to take control of your learning journey with tools designed by students, for students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-lg shadow-blue-100/50 border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 md:p-8 mb-10 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Our Team</h2>
          </div>
          <p className="text-base leading-relaxed opacity-95">
            Study Hours was founded by a group of passionate educators and developers who understand the challenges students face in managing their study time effectively. We are dedicated to providing innovative solutions that empower students to take control of their learning journey.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-6 md:p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <p className="text-base text-gray-700 leading-relaxed mb-5">
            We would love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us. We value your input and are committed to continuously improving our platform to meet your needs.
          </p>
          <a 
            href="mailto:studyhours@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 text-sm"
          >
            <Mail className="w-4 h-4" />
            studyhours@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}