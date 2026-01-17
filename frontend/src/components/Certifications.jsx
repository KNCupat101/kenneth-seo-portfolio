import React from 'react';
import { certificationsData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Industry-recognized credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <Card
              key={cert.id}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
