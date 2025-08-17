import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Target, Zap } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [monthlyVisits, setMonthlyVisits] = useState(10000);
  const [currentLeadRate, setCurrentLeadRate] = useState(1);
  const [currentSalesRate, setCurrentSalesRate] = useState(15);
  const [averageTicket, setAverageTicket] = useState(1500);
  const [kultripActive, setKultripActive] = useState(false);

  const kultripSalesRate = 25;
  
  // Kultrip Lead Rate é sempre a taxa atual + 2%
  const kultripLeadRate = currentLeadRate + 2;

  // Current scenario calculations
  const currentLeads = Math.round((monthlyVisits * currentLeadRate) / 100);
  const currentSales = Math.round((currentLeads * currentSalesRate) / 100);
  const currentRevenue = currentSales * averageTicket;

  // Kultrip scenario calculations
  const kultripLeads = Math.round((monthlyVisits * kultripLeadRate) / 100);
  const kultripSalesCount = Math.round((kultripLeads * kultripSalesRate) / 100);
  const kultripRevenue = kultripSalesCount * averageTicket;

  // Differences
  const additionalLeads = kultripLeads - currentLeads;
  const additionalSales = kultripSalesCount - currentSales;
  const additionalRevenue = kultripRevenue - currentRevenue;

  const displayLeadRate = kultripActive ? kultripLeadRate : currentLeadRate;
  const displaySalesRate = kultripActive ? kultripSalesRate : currentSalesRate;
  const displayLeads = kultripActive ? kultripLeads : currentLeads;
  const displaySales = kultripActive ? kultripSalesCount : currentSales;
  const displayRevenue = kultripActive ? kultripRevenue : currentRevenue;

  return (
    <section className="mt-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-800">
            Calculate your agency's revenue potential with Kultrip
          </h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how integrating the Kultrip widget can significantly increase 
          your lead capture and sales conversion, generating more revenue for your agency.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Your agency data
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly website visits
              </label>
              <input
                type="number"
                value={monthlyVisits}
                onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current conversion rate (visits → leads) %
              </label>
              <input
                type="number"
                value={currentLeadRate}
                onChange={(e) => setCurrentLeadRate(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current conversion rate (leads → sales) %
              </label>
              <input
                type="number"
                value={currentSalesRate}
                onChange={(e) => setCurrentSalesRate(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average sale value ($)
              </label>
              <input
                type="number"
                value={averageTicket}
                onChange={(e) => setAverageTicket(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Monthly results
            </h3>
            
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${!kultripActive ? 'text-gray-800' : 'text-gray-500'}`}>
                Current
              </span>
              <button
                onClick={() => setKultripActive(!kultripActive)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  kultripActive ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    kultripActive ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${kultripActive ? 'text-purple-600' : 'text-gray-500'}`}>
                With Kultrip
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Conversion Rates */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-2">Lead rate</div>
                {kultripActive ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">{kultripLeadRate}%</span>
                    <span className="text-sm text-green-600 ml-1">
                      (+2.0%)
                    </span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-800">
                    {displayLeadRate}%
                  </div>
                )}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Sales rate</div>
                <div className={`text-2xl font-bold ${kultripActive ? 'text-purple-600' : 'text-gray-800'}`}>
                  {displaySalesRate}%
                  {kultripActive && (
                    <span className="text-sm text-green-600 ml-2">
                      (+{kultripSalesRate - currentSalesRate}%)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">Generated leads</span>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${kultripActive ? 'text-blue-600' : 'text-gray-800'}`}>
                    {displayLeads.toLocaleString()}
                  </div>
                  {kultripActive && additionalLeads > 0 && (
                    <div className="text-sm text-green-600">
                      +{additionalLeads.toLocaleString()} leads
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-700">Closed sales</span>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${kultripActive ? 'text-green-600' : 'text-gray-800'}`}>
                    {displaySales.toLocaleString()}
                  </div>
                  {kultripActive && additionalSales > 0 && (
                    <div className="text-sm text-green-600">
                      +{additionalSales.toLocaleString()} sales
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-700">Monthly revenue</span>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${kultripActive ? 'text-purple-600' : 'text-gray-800'}`}>
                    ${displayRevenue.toLocaleString()}
                  </div>
                  {kultripActive && additionalRevenue > 0 && (
                    <div className="text-lg text-green-600 font-semibold">
                      +${additionalRevenue.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {kultripActive && (
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Estimated annual impact</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  +${(additionalRevenue * 12).toLocaleString()}
                </div>
                <div className="text-sm text-purple-700 mt-1">
                  Additional revenue per year
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};