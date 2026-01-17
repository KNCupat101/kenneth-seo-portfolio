import React from 'react';
import { caseStudiesData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Proven results across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <Card
              key={study.id}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {study.title}
                </CardTitle>
                <p className="text-sm font-semibold text-blue-600">
                  {study.client}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <TrendingUp size={18} className="text-green-600" />
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
