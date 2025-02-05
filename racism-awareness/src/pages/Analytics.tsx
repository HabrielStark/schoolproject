import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Analytics: React.FC = () => {
  // Chart configurations
  const yearlyRacismData = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Reported Racism Cases',
        data: [350, 350, 350, 350, 350, 350, 350, 350, 350, 490], // 40% increase in 2022
        borderColor: 'rgb(219, 39, 119)',
        backgroundColor: 'rgba(219, 39, 119, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const discriminationData = {
    labels: ['Racism Related', 'Other Forms'],
    datasets: [
      {
        data: [316, 315], // 50% of 631 reported cases
        backgroundColor: [
          'rgba(219, 39, 119, 0.8)',
          'rgba(124, 58, 237, 0.8)',
        ],
        borderColor: [
          'rgba(219, 39, 119, 1)',
          'rgba(124, 58, 237, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const povertyData = {
    labels: ['At Risk of Poverty', 'Severe Deprivation', 'Not at Risk'],
    datasets: [
      {
        data: [26.5, 9, 64.5],
        backgroundColor: [
          'rgba(219, 39, 119, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(124, 58, 237, 0.8)',
        ],
        borderColor: [
          'rgba(219, 39, 119, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(124, 58, 237, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(209, 213, 219)',
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: 'rgb(255, 255, 255)',
        bodyColor: 'rgb(209, 213, 219)',
        borderColor: 'rgba(219, 39, 119, 0.2)',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        titleFont: {
          size: 13
        },
        bodyFont: {
          size: 12
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgb(209, 213, 219)',
          font: {
            size: 11
          },
          padding: 5
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(209, 213, 219)',
          font: {
            size: 11
          },
          padding: 5
        }
      }
    }
  } as const;

  return (
    <div className="relative min-h-screen">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Main Content */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 sm:px-0"
            >
              Racism Statistics in Spain
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 px-4 sm:px-0"
            >
              Analysis of reported cases, discrimination patterns, and social impact from 2013 to 2023
            </motion.p>
          </div>

          {/* Key Findings Section - Moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8 px-4 sm:px-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Key Statistics Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span><strong>40% Increase:</strong> Sharp rise in reported racism cases in June 2022</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span><strong>50% of Cases:</strong> 316 out of 631 discrimination reports were racism-related in 2023 in Barcelona</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span><strong>26.5% at Risk:</strong> Population facing poverty or social exclusion in 2023</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span><strong>Baseline:</strong> Average of 350 annual racism hate crimes from 2013-2021</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 px-4 sm:px-0">
            {/* First row: Line and Pie charts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Annual Racism Cases Trend
                </h3>
                <div className="h-[200px] sm:h-[250px]">
                  <Line data={yearlyRacismData} options={chartOptions} />
                </div>
                <p className="mt-3 text-gray-400 text-xs">
                  Source: SOS Racism Federation Annual Report
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Discrimination Types (2023)
                </h3>
                <div className="h-[250px] flex items-center justify-center">
                  <Pie data={discriminationData} options={chartOptions} />
                </div>
                <p className="mt-3 text-gray-400 text-xs">
                  Source: Barcelona Discrimination Observatory
                </p>
              </div>
            </motion.div>

            {/* Second row: Bar chart and Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Social Impact: Population at Risk (2023)
                </h3>
                <div className="h-[250px] flex items-center justify-center">
                  <Bar 
                    data={{
                      labels: ['At Risk of Poverty', 'Severe Deprivation', 'Not at Risk'],
                      datasets: [{
                        label: 'Percentage of Population',
                        data: [26.5, 9, 64.5],
                        backgroundColor: [
                          'rgba(219, 39, 119, 0.8)',
                          'rgba(236, 72, 153, 0.8)',
                          'rgba(124, 58, 237, 0.8)',
                        ],
                        borderColor: [
                          'rgba(219, 39, 119, 1)',
                          'rgba(236, 72, 153, 1)',
                          'rgba(124, 58, 237, 1)',
                        ],
                        borderWidth: 1,
                      }]
                    }}
                    options={{
                      ...chartOptions,
                      maintainAspectRatio: true,
                      aspectRatio: 1.5,
                      indexAxis: 'y' as const,
                      scales: {
                        ...chartOptions.scales,
                        x: {
                          ...chartOptions.scales.x,
                          max: 100,
                          ticks: {
                            ...chartOptions.scales.x.ticks,
                            callback: function(value) {
                              return value + '%';
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
                <p className="mt-3 text-gray-400 text-xs text-center">
                  Source: Official Government Data
                </p>
              </div>
            </motion.div>

            {/* Additional Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Impact Analysis
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-pink-400 font-semibold mb-2">Economic Impact</h4>
                    <p className="text-sm text-gray-300">Over 35% of the population faces economic challenges, with 26.5% at risk of poverty and 9% in severe deprivation.</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Social Implications</h4>
                    <p className="text-sm text-gray-300">The correlation between economic vulnerability and discrimination creates a cycle of social exclusion that needs to be addressed.</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-pink-400 font-semibold mb-2">Call to Action</h4>
                    <p className="text-sm text-gray-300">These statistics highlight the urgent need for comprehensive social and economic policies to combat discrimination and poverty.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Context Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Understanding the Data
                </h2>
                <div className="text-sm text-gray-300 space-y-4">
                  <p>
                    The data presented above shows a concerning trend in racism and discrimination cases across Spain. 
                    The sharp 40% increase in reported cases during June 2022 marks a significant shift in the previously stable pattern of around 350 annual cases.
                  </p>
                  <p>
                    Of particular note is the even distribution between racism-related and other forms of discrimination in 2023, 
                    highlighting the persistent challenge of racial discrimination in Spanish society.
                  </p>
                  <p>
                    The poverty risk data further illustrates the broader social context, with over a quarter of the population 
                    facing economic vulnerability, which often intersects with issues of discrimination and social exclusion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Survey Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Survey Results: Racism Project by Acil
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Racism Experience Chart */}
                  <div className="relative group">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-pink-400 mb-4">Experience of Racism in Spain</h3>
                      <div className="h-[250px] flex items-center justify-center">
                        <Doughnut
                          data={{
                            labels: ['Yes', 'No'],
                            datasets: [{
                              data: [81.25, 18.75],
                              backgroundColor: [
                                'rgba(236, 72, 153, 0.8)',
                                'rgba(124, 58, 237, 0.8)',
                              ],
                              borderColor: [
                                'rgba(236, 72, 153, 1)',
                                'rgba(124, 58, 237, 1)',
                              ],
                              borderWidth: 1
                            }]
                          }}
                          options={{
                            ...chartOptions,
                            plugins: {
                              ...chartOptions.plugins,
                              legend: {
                                ...chartOptions.plugins.legend,
                                position: 'bottom' as const
                              }
                            }
                          }}
                        />
                      </div>
                      <div className="text-center mt-4 text-sm text-gray-400">
                        Based on 16 surveys: 13 reported experiencing racism, 3 did not
                      </div>
                    </div>
                  </div>

                  {/* Frequency of Racism Chart */}
                  <div className="relative group">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-400 mb-4">Frequency of Racism</h3>
                      <div className="h-[250px] flex items-center justify-center">
                        <Bar
                          data={{
                            labels: ['Never', 'Every day', 'Once a week', 'Others'],
                            datasets: [{
                              label: 'Number of Responses',
                              data: [10, 2, 1, 3],
                              backgroundColor: [
                                'rgba(124, 58, 237, 0.8)',
                                'rgba(236, 72, 153, 0.8)',
                                'rgba(219, 39, 119, 0.8)',
                                'rgba(167, 139, 250, 0.8)',
                              ],
                              borderColor: [
                                'rgba(124, 58, 237, 1)',
                                'rgba(236, 72, 153, 1)',
                                'rgba(219, 39, 119, 1)',
                                'rgba(167, 139, 250, 1)',
                              ],
                              borderWidth: 1
                            }]
                          }}
                          options={chartOptions}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Survey Details */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-pink-400 mb-4">Survey Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-2">16</div>
                          <p className="text-sm text-gray-300">Total Surveys</p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-pink-400 mb-2">5</div>
                          <p className="text-sm text-gray-300">Signed Forms</p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-2">4</div>
                          <p className="text-sm text-gray-300">Video Testimonials</p>
                        </div>
                      </div>

                      {/* Ethnicity Breakdown */}
                      <div className="mt-6">
                        <h4 className="text-md font-semibold text-purple-400 mb-3">Ethnicity Distribution</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900/50 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-gray-300">European</span>
                            <div className="flex items-center">
                              <span className="text-pink-400 font-bold mr-2">14</span>
                              <span className="text-gray-400">participants</span>
                            </div>
                          </div>
                          <div className="bg-gray-900/50 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-gray-300">Latino</span>
                            <div className="flex items-center">
                              <span className="text-pink-400 font-bold mr-2">1</span>
                              <span className="text-gray-400">participant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 