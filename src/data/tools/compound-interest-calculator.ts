import { CalculatorConfig } from '@/lib/types';

export const compoundInterestCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'initial_investment',
      label: 'Initial Investment',
      type: 'number',
      placeholder: 'e.g. 10000',
      unit: '$',
      min: 0,
      max: 10000000,
      step: 100,
      helpText: 'The amount you are starting with today.',
    },
    {
      id: 'monthly_contribution',
      label: 'Monthly Contribution',
      type: 'number',
      placeholder: 'e.g. 500',
      unit: '$',
      min: 0,
      max: 100000,
      step: 25,
      helpText: 'How much you plan to add each month.',
    },
    {
      id: 'annual_rate',
      label: 'Annual Interest Rate',
      type: 'number',
      placeholder: 'e.g. 7',
      unit: '%',
      min: 0,
      max: 30,
      step: 0.1,
      defaultValue: 7,
      helpText: 'Historical S&P 500 average is about 10% (7% after inflation).',
    },
    {
      id: 'years',
      label: 'Investment Period',
      type: 'number',
      placeholder: 'e.g. 20',
      unit: 'years',
      min: 1,
      max: 50,
      step: 1,
      helpText: 'How long you plan to invest.',
    },
    {
      id: 'compound_frequency',
      label: 'Compound Frequency',
      type: 'select',
      defaultValue: 'monthly',
      options: [
        { label: 'Monthly (12x/year)', value: 'monthly' },
        { label: 'Quarterly (4x/year)', value: 'quarterly' },
        { label: 'Annually (1x/year)', value: 'annually' },
      ],
      helpText: 'How often interest is calculated and added. Most investments compound monthly.',
    },
  ],
  outputs: [
    {
      id: 'finalBalance',
      label: 'Final Balance',
      unit: '$',
      format: 'currency',
      highlight: true,
      description: 'The total value of your investment at the end of the period.',
    },
    {
      id: 'totalContributions',
      label: 'Total Contributions',
      unit: '$',
      format: 'currency',
      description: 'The total amount of money you personally put in.',
    },
    {
      id: 'totalInterest',
      label: 'Total Interest Earned',
      unit: '$',
      format: 'currency',
      highlight: true,
      description: 'How much your money earned on its own through compound growth.',
    },
    {
      id: 'effectiveAnnualRate',
      label: 'Effective Annual Rate',
      unit: '%',
      format: 'percentage',
      description: 'The actual annual return accounting for compounding frequency.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const P = Number(inputs.initial_investment); // Principal
    const PMT = Number(inputs.monthly_contribution); // Monthly contribution
    const annualRate = Number(inputs.annual_rate) / 100; // Convert percentage to decimal
    const t = Number(inputs.years); // Time in years
    const frequency = inputs.compound_frequency as string;

    if (t <= 0) {
      return {
        finalBalance: P,
        totalContributions: P,
        totalInterest: 0,
        effectiveAnnualRate: 0,
      };
    }

    // Compounding periods per year
    let n: number;
    switch (frequency) {
      case 'quarterly':
        n = 4;
        break;
      case 'annually':
        n = 1;
        break;
      case 'monthly':
      default:
        n = 12;
        break;
    }

    const r = annualRate; // Annual rate as decimal

    if (r === 0) {
      // No interest — simple sum
      const totalContributions = P + PMT * 12 * t;
      return {
        finalBalance: Math.round(totalContributions * 100) / 100,
        totalContributions: Math.round(totalContributions * 100) / 100,
        totalInterest: 0,
        effectiveAnnualRate: 0,
      };
    }

    // Compound interest on the principal:
    // A_principal = P * (1 + r/n)^(n*t)
    const ratePerPeriod = r / n;
    const totalPeriods = n * t;
    const compoundFactor = Math.pow(1 + ratePerPeriod, totalPeriods);

    const principalGrowth = P * compoundFactor;

    // Future value of a series (monthly contributions)
    // We need to convert monthly contributions to per-period contributions
    // If compounding is monthly, PMT stays the same
    // If compounding is quarterly, we accumulate 3 months of PMT per period
    // If compounding is annually, we accumulate 12 months of PMT per period
    const monthsPerPeriod = 12 / n;
    const contributionPerPeriod = PMT * monthsPerPeriod;

    // FV of annuity: PMT_period * [((1 + r/n)^(n*t) - 1) / (r/n)]
    const annuityFV = contributionPerPeriod * ((compoundFactor - 1) / ratePerPeriod);

    const finalBalance = principalGrowth + annuityFV;
    const totalContributions = P + PMT * 12 * t;
    const totalInterest = finalBalance - totalContributions;

    // Effective Annual Rate (EAR) = (1 + r/n)^n - 1
    const ear = (Math.pow(1 + ratePerPeriod, n) - 1) * 100;

    return {
      finalBalance: Math.round(finalBalance * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      effectiveAnnualRate: Math.round(ear * 100) / 100,
    };
  },
  supportingContent: {
    intro:
      '<a href="https://en.wikipedia.org/wiki/Compound_interest" target="_blank" rel="noopener">Compound interest</a> is the single most powerful wealth-building force available to you. This compound interest calculator shows exactly how your money grows when you combine a starting investment, regular contributions, and the power of compounding. Even small monthly amounts turn into serious wealth given enough time. Building financial health is just as important as physical health — use our <a href="/tdee-calculator">TDEE Calculator</a> to invest in both.',
    howToUse:
      'Enter your starting investment, monthly contribution, expected annual return rate (7% is a common inflation-adjusted benchmark for <a href="https://en.wikipedia.org/wiki/S%26P_500" target="_blank" rel="noopener">S&amp;P 500 index funds</a>), and investment period. Select compounding frequency and calculate. The results show your final balance, total contributions, compound interest earned, and effective annual rate.',
    faq: [
      {
        question: 'What annual return rate should I use?',
        answer:
          'The S&amp;P 500 has historically returned about 10% annually before inflation, or roughly 7% after inflation. Use 7% for real purchasing power, 10% for nominal amounts, or 3-5% for bonds and savings accounts. The key is to start — <a href="https://www.investopedia.com/articles/investing/062714/100-years-sp-500-returns.asp" target="_blank" rel="noopener">time in the market</a> matters more than timing the market.',
      },
      {
        question: 'How much difference does starting early really make?',
        answer:
          'Massive. Someone investing $500/month from age 25 will have roughly $1.2 million by 60 at 7% annual return. Starting at 35 instead yields about $567,000 — less than half, despite only missing 10 years. The early investor contributed just $60,000 more but ended up over $600,000 ahead. That is the power of compound interest and time.',
      },
      {
        question: 'Does compounding frequency make a big difference?',
        answer:
          'The difference between monthly and annual compounding is relatively small — typically a fraction of a percent in effective annual return. For example, 7% compounded monthly gives an effective rate of about 7.23%, versus 7% flat annually. Over long periods this adds up, but contribution amount, rate of return, and time horizon matter far more.',
      },
    ],
    relatedTools: ['tdee-calculator', 'body-fat-calculator', 'protein-macro-calculator'],
  },
};
