import { CheckCircleIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const feature = [
  {
    title: 'Integration Ecosystem',
    description: 'Enhance your productivity by connecting your tools, keeping your essentials in one place.',
    icon: <ChartBarIcon className="h-8 w-8 text-black" />, // Example icon
  },
  {
    title: 'Goal Setting and Tracking',
    description: 'Define and track your goals, breaking down objectives into achievable tasks.',
    icon: <CheckCircleIcon className="h-8 w-8 text-black" />, // Example icon
  },
  {
    title: 'Secure Data Encryption',
    description: 'Keep your data safe with advanced encryption technologies.',
    icon: <ShieldCheckIcon className="h-8 w-8 text-black" />, // Example icon
  },
];

export const Features = () => {
  return (
    <section>
      <div className="bg-black text-white py-[72px] mt-5">
        <div className="container">
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, smart tools, and tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {feature.map(({ title, description, icon }) => (
              <div
                key={title}
                className="border border-white/30 px-6 py-10 text-center rounded-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="inline-flex h-14 w-14 bg-white justify-center items-center rounded-lg">
                    {icon}
                  </div>
                </div>
                <h3 className="mt-4 font-bold text-lg">{title}</h3>
                <p className="mt-2 text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
