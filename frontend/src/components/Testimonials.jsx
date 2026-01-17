import React from 'react';
import { testimonialsData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What clients say about working with Kenneth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.slice(0, 4).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <Quote className="text-blue-600 mb-4" size={32} />
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
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

export default Testimonials;
