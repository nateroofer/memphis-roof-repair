// Roof Cost Calculator Component - Lead Generation Tool
'use client';

import { useState } from 'react';
import { Calculator, Home, Layers, ArrowRight } from 'lucide-react';

interface CalculatorState {
  roofSize: string;
  roofType: string;
  material: string;
  pitch: string;
  floors: string;
}

const RoofCostCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CalculatorState>({
    roofSize: '',
    roofType: 'standard',
    material: '',
    pitch: 'normal',
    floors: '1'
  });
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const calculateEstimate = () => {
    // Base calculation logic
    const size = parseInt(formData.roofSize) || 2000;
    
    // Material multipliers
    const materialCosts: Record<string, { low: number; high: number }> = {
      'asphalt-3tab': { low: 3.5, high: 5.0 },
      'asphalt-architectural': { low: 5.0, high: 8.0 },
      'metal': { low: 7.5, high: 12.5 },
      'tpo': { low: 4.0, high: 8.0 }
    };

    const baseCost = materialCosts[formData.material] || materialCosts['asphalt-architectural'];
    
    // Complexity multipliers
    let complexityMultiplier = 1.0;
    if (formData.roofType === 'complex') complexityMultiplier = 1.3;
    if (formData.pitch === 'steep') complexityMultiplier *= 1.2;
    if (formData.floors === '2+') complexityMultiplier *= 1.15;
    
    const lowEstimate = Math.round((size * baseCost.low * complexityMultiplier) / 100) * 100;
    const highEstimate = Math.round((size * baseCost.high * complexityMultiplier) / 100) * 100;
    
    setEstimate({ low: lowEstimate, high: highEstimate });
    setShowLeadForm(true);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      calculateEstimate();
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateField = (field: keyof CalculatorState, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.roofSize && parseInt(formData.roofSize) > 0;
      case 2:
        return formData.roofType !== '';
      case 3:
        return formData.material !== '';
      case 4:
        return formData.pitch !== '';
      default:
        return false;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-zion-green rounded-full flex items-center justify-center">
          <Calculator className="w-6 h-6 text-zion-blue" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold">Instant Roof Cost Estimate</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get your personalized estimate in 60 seconds
          </p>
        </div>
      </div>

      {!estimate ? (
        <>
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-1/4 h-2 rounded-full mx-1 transition-all ${
                    i <= step ? 'bg-zion-green' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Step {step} of 4
            </p>
          </div>

          {/* Step 1: Roof Size */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block">
                <span className="text-lg font-semibold mb-2 block">
                  What's your approximate roof size?
                </span>
                <input
                  type="number"
                  placeholder="Enter square feet (e.g., 2000)"
                  value={formData.roofSize}
                  onChange={(e) => updateField('roofSize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:ring-2 focus:ring-zion-green focus:border-transparent dark:bg-gray-800"
                />
              </label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💡 Typical single-story home: 1,500-2,500 sq ft
              </p>
            </div>
          )}

          {/* Step 2: Roof Type */}
          {step === 2 && (
            <div className="space-y-4">
              <span className="text-lg font-semibold mb-4 block">
                How would you describe your roof?
              </span>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'standard', label: 'Simple/Standard', desc: 'Basic gable or hip' },
                  { value: 'complex', label: 'Complex', desc: 'Multiple valleys, dormers' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField('roofType', option.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.roofType === option.value
                        ? 'border-zion-green bg-zion-green/10'
                        : 'border-gray-300 dark:border-gray-600 hover:border-zion-green/50'
                    }`}
                  >
                    <div className="font-bold mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Material */}
          {step === 3 && (
            <div className="space-y-4">
              <span className="text-lg font-semibold mb-4 block">
                What roofing material are you considering?
              </span>
              <div className="space-y-3">
                {[
                  { value: 'asphalt-3tab', label: '3-Tab Asphalt Shingles', price: 'Most affordable' },
                  { value: 'asphalt-architectural', label: 'Architectural Shingles', price: 'Popular choice' },
                  { value: 'metal', label: 'Metal Roofing', price: 'Premium, long-lasting' },
                  { value: 'tpo', label: 'TPO (Flat/Commercial)', price: 'Commercial standard' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField('material', option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left flex justify-between items-center ${
                      formData.material === option.value
                        ? 'border-zion-green bg-zion-green/10'
                        : 'border-gray-300 dark:border-gray-600 hover:border-zion-green/50'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{option.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{option.price}</div>
                    </div>
                    <Layers className="w-5 h-5 text-zion-green" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-lg font-semibold mb-3 block">Roof pitch/steepness?</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'normal', label: 'Normal (walkable)' },
                    { value: 'steep', label: 'Steep (requires safety gear)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateField('pitch', option.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.pitch === option.value
                          ? 'border-zion-green bg-zion-green/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-zion-green/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-lg font-semibold mb-3 block">Number of stories?</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '1', label: 'Single story' },
                    { value: '2+', label: 'Two or more' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateField('floors', option.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.floors === option.value
                          ? 'border-zion-green bg-zion-green/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-zion-green/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-zion-green transition-colors"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                canProceed()
                  ? 'bg-zion-green text-zion-blue hover:bg-zion-green-light'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              {step === 4 ? 'Calculate Estimate' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Results */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-zion-blue to-zion-blue-light p-8 rounded-xl text-white mb-6">
              <p className="text-sm mb-2">Your Estimated Roof Cost:</p>
              <p className="text-4xl md:text-5xl font-bold">
                ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
              </p>
              <p className="text-sm mt-2 text-gray-200">
                Based on {formData.roofSize} sq ft with {formData.material.replace('-', ' ')} material
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
              <p className="text-sm font-semibold mb-2">📋 Note: This is a rough estimate</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Actual costs vary based on decking condition, complexity, permits, and specific materials chosen. Schedule a free inspection for an accurate, itemized quote.
              </p>
            </div>
          </div>

          {showLeadForm && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-heading text-xl font-bold mb-4 text-center">
                Get Your Detailed, Itemized Quote
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Schedule a free inspection and we'll provide an exact estimate with no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9013049466"
                  className="flex-1 bg-zion-green text-zion-blue font-bold px-6 py-4 rounded-lg hover:bg-zion-green-light transition-colors text-center"
                >
                  Call (901) 304-9466
                </a>
                <a
                  href="/#lead-form"
                  className="flex-1 bg-zion-blue text-white font-bold px-6 py-4 rounded-lg hover:bg-zion-blue-light transition-colors text-center"
                >
                  Request Inspection Online
                </a>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setStep(1);
              setEstimate(null);
              setShowLeadForm(false);
              setFormData({
                roofSize: '',
                roofType: 'standard',
                material: '',
                pitch: 'normal',
                floors: '1'
              });
            }}
            className="w-full mt-4 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-zion-green transition-colors"
          >
            Start Over
          </button>
        </>
      )}
    </div>
  );
};

export default RoofCostCalculator;

