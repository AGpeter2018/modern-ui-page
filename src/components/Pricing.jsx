import { Check, Star } from 'lucide-react'
import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individual developers and small projects',
    features: [
      'AI Code Completion (100 requests/day)',
      'Basic Code Review',
      '1 Active Project',
      'Community Support',
      'Code Snippets Library',
      'VS Code Extension'
    ],
    popular: false,
    cta: 'Get Started Free',
    highlight: false
  },
  {
    name: 'Professional',
    price: '$29.99',
    description: 'For professional developers and growing teams',
    features: [
      'Unlimited AI Code Completion',
      'Advanced Code Review & Security Scan',
      'Intelligent Refactoring',
      'Natural Language to Code',
      'Up to 10 Team Members',
      'Priority Email Support',
      'API Access',
      'Custom Code Templates',
      'Performance Optimization Tools',
      'Real-Time Collaboration'
    ],
    popular: true,
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: '$99.99',
    description: 'Advanced features for large teams and organizations',
    features: [
      'Everything in Professional',
      'Unlimited Team Members',
      'Automated Testing Suite',
      'Custom AI Model Training',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Advanced Security & Compliance',
      'Self-Hosted Option',
      'Custom Integrations',
      'SLA Guarantee',
      'On-boarding & Training',
      'White-label Solutions'
    ],
    popular: false,
    cta: 'Contact Sales',
    highlight: false
  }
]

const Pricing = () => {
  return (
    <section id='pricing' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className='max-w-7xl mx-auto'>
      <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent'>Simple, Transparent</span>
            <br />
            <span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Pricing Plans
            </span>
          </h2>
  <p className="text-gray-500 text-xl text-base sm:text-lg max-w-2xl mx-auto">
    Simple, transparent pricing that grows with you
  </p>
  <p className="text-gray-500 text-base text-xl sm:text-lg max-w-2xl mx-auto">
    Start with a 14-day free trial. No credit card required. Cancel anytime.
  </p>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6'>
  {
    plans.map((plan, key) => {
      return <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105' : 'border-slate-800 hover:border-slate-700'}`}>
        <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg'/>
        {plan.popular && (
          <div className='absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10'>
            <div className='flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg'>
              <Star className='w-3 h-3 sm:w-3 sm:h-3 fill-white'/>
              <span>Most popular</span>
            </div>
          </div>
        )}
        <div className='text-center mb-6 sm:mb-8'>
          <h3 className='text-xl sm:text-2xl font-bold mb-2'>
            {plan.name}
          </h3>
            <p className='text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4'>
              {plan.description}
            </p>
            <div className='flex items-baseline justify-center '>
              <span className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>{plan.price}</span>
              <span className='text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base'>/month</span>
            </div>
        </div>
        <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row'>
         
          {plan.features.map((feature, key) => {
            return <li key={key} className='flex flex-start space-x-2 sm:space-x-3'>
              <div className='flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5'>
                <Check className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400'/>
              </div>
                <span className='text-gray-300 text-sm sm:text-base'>{feature}</span>
            </li>
          })}
        </ul>
        <button className={`w-full py-2.5 sm:p-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${plan.cta ? 'bg-gradient-to-b from-blue-500 to-cyan-500': 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
         {plan.cta}
        </button>
      </div>
    })
  }
</div>
<div className='mt-8 sm:mt-12 text-center'>
  <p className='text-gray-400 text-base text-xl'>
    Need a custom plan ? <a target='_blank'  rel='noopener noreferrer' href='https://my-portfolio-five-ebon-89.vercel.app' className='text-blue-400 hover:text-blue-300 hover:underline'>Contact our sales team</a>
  </p>
</div>
  </div>
    </section>
  )
}

export default Pricing