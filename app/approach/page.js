"use client";
import React from "react";
import {
  Target,
  Heart,
  Users,
  Award,
  Sparkles,
  CheckCircle,
  Brain,
  Stethoscope,
} from "lucide-react";

export default function ApproachPage() {
  const uniqueApproaches = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "व्यक्तिगत उपचार योजना",
      description:
        "हर मरीज की स्थिति अलग होती है। हम एक ही बीमारी के लिए भी अलग-अलग मरीजों को उनकी परिस्थिति, उम्र, और जीवनशैली के अनुसार अलग treatment plan देते हैं।",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "आधुनिक तकनीक + पारंपरिक देखभाल",
      description:
        "हम latest brain stimulation therapies (TDCS, Brain Polarization) का उपयोग करते हैं, साथ ही मरीज और परिवार के साथ गहरा संबंध बनाकर holistic treatment देते हैं।",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "दवा + थेरेपी का संतुलन",
      description:
        "सिर्फ दवाइयों पर निर्भर नहीं रहते। Brain Feedback, Electrosleep, और Counseling जैसी therapies से दवाओं की जरूरत कम करते हैं और long-term relief देते हैं।",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "परिवार को शामिल करना",
      description:
        "मानसिक स्वास्थ्य में परिवार की भूमिका महत्वपूर्ण है। हम परिवार के सदस्यों को counseling और guidance देते हैं ताकि वे मरीज का सही support कर सकें।",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const diseaseApproaches = [
    {
      disease: "Depression (डिप्रेशन)",
      icon: "😔",
      approach: [
        "Brain Polarization therapy से brain chemistry को naturally balance करते हैं",
        "Medication के साथ-साथ Cognitive Behavioral Therapy (CBT)",
        "Lifestyle modifications और exercise routine की detailed planning",
        "Regular follow-ups में progress tracking और dose adjustment",
      ],
    },
    {
      disease: "Anxiety (एंग्जायटी)",
      icon: "😰",
      approach: [
        "Brain Feedback Therapy से anxiety patterns को identify और modify करते हैं",
        "Relaxation techniques और breathing exercises की training",
        "Gradual exposure therapy जहां जरूरी हो",
        "Minimal medication approach - सिर्फ जरूरत पड़ने पर",
      ],
    },
    {
      disease: "Insomnia (अनिद्रा)",
      icon: "😴",
      approach: [
        "Electrosleep Therapy - दवा के बिना natural नींद लाने में मदद",
        "Sleep hygiene education और bedroom environment optimization",
        "Underlying depression या anxiety का treatment",
        "Medication सिर्फ short-term use के लिए, dependency से बचाव",
      ],
    },
    {
      disease: "Addiction (नशा मुक्ति)",
      icon: "🚭",
      approach: [
        "Aversion Therapy - शराब, तंबाकू से मानसिक विरक्ति उत्पन्न करना",
        "Counseling sessions परिवार के साथ मिलकर",
        "Relapse prevention strategies और coping mechanisms",
        "Long-term follow-up और support group recommendations",
      ],
    },
    {
      disease: "ADHD (बच्चों में)",
      icon: "👶",
      approach: [
        "Detailed neuropsychological assessment और IQ testing",
        "Parents को behavior management techniques सिखाना",
        "School teachers के साथ coordination",
        "Medication only when necessary, preference for behavioral interventions",
      ],
    },
    {
      disease: "Schizophrenia (स्किजोफ्रेनिया)",
      icon: "🧠",
      approach: [
        "Long-acting injectable medications option - daily medicines की tension नहीं",
        "Family psychoeducation - बीमारी को समझना और stigma कम करना",
        "Social skills training और vocational rehabilitation",
        "Crisis management plan परिवार के साथ मिलकर बनाना",
      ],
    },
    {
      disease: "Migraine (माइग्रेन)",
      icon: "🤕",
      approach: [
        "Brain Feedback Therapy - migraine triggers को पहचानना और control करना",
        "Preventive medications के साथ lifestyle modifications",
        "Trigger diary maintain करना और pattern analysis",
        "Stress management और yoga/meditation की recommendation",
      ],
    },
    {
      disease: "Autism (ऑटिज्म)",
      icon: "🌈",
      approach: [
        "Early intervention programs - जितनी जल्दी शुरू करें उतना बेहतर",
        "Speech therapy, occupational therapy का coordination",
        "Parents को home-based activities सिखाना",
        "Regular developmental assessment और individualized education plan",
      ],
    },
  ];

  const whyDifferent = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "BHU से MD - मजबूत Academic Background",
      description:
        "काशी हिन्दू विश्वविद्यालय (BHU) जैसे प्रतिष्ठित संस्थान से Psychiatry में MD की डिग्री",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Latest Technology में Trained",
      description:
        "Brain Stimulation, Neurofeedback जैसी modern therapies में विशेष प्रशिक्षण",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "10+ Years Experience",
      description:
        "विभिन्न प्रकार के मानसिक रोगों के हजारों cases successfully treat किए हैं",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description:
        "मरीज को सिर्फ case number नहीं, इंसान समझते हैं। Time देकर सुनते हैं।",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            हमारी अनोखी चिकित्सा पद्धति
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            डॉ. अखिलेश पांडेय का approach सिर्फ लक्षणों का इलाज नहीं, बल्कि जड़
            से समस्या को समझना और हल करना है
          </p>
        </div>
      </section>

      {/* Unique Approaches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            हम दूसरों से कैसे अलग हैं?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {uniqueApproaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${approach.color} p-6 text-white`}
                >
                  <div className="flex items-center">
                    {approach.icon}
                    <h3 className="text-2xl font-bold ml-4">
                      {approach.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disease-Specific Approaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            अलग-अलग बीमारियों का अलग Treatment
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            हर बीमारी के लिए specialized approach - one-size-fits-all नहीं!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {diseaseApproaches.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.disease}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.approach.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Akhilesh */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            डॉ. अखिलेश पांडेय को क्यों चुनें?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyDifferent.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            अपनी या अपने परिवार की मानसिक स्वास्थ्य समस्या के लिए सही treatment
            चाहिए?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            आज ही appointment लें और अनुभव करें personalized, compassionate care
          </p>
          <a
            href="tel:9450016305"
            className="inline-block bg-white text-blue-600 font-bold text-xl py-4 px-10 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            📞 अभी कॉल करें: 9450016305
          </a>
        </div>
      </section>
    </main>
  );
}
