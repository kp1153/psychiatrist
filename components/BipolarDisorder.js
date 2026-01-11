// ================= PART 1 / 4 =================
"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Activity, Brain, Heart, AlertTriangle, Shield, TrendingUp, Pill, Users, Zap, Moon, Sun, Phone } from 'lucide-react';

export default function BipolarDisorderOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              बाइपोलर डिसऑर्डर (Bipolar Disorder)
            </h1>
            <Brain className="w-12 h-12 text-pink-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            मूड में अत्यधिक उतार-चढ़ाव का मानसिक स्वास्थ्य विकार - लक्षण, निदान और उपचार
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview"><Brain className="w-4 h-4" />अवलोकन</TabsTrigger>
            <TabsTrigger value="symptoms"><Activity className="w-4 h-4" />लक्षण</TabsTrigger>
            <TabsTrigger value="types"><TrendingUp className="w-4 h-4" />प्रकार</TabsTrigger>
            <TabsTrigger value="treatment"><Pill className="w-4 h-4" />उपचार</TabsTrigger>
            <TabsTrigger value="lifestyle"><Heart className="w-4 h-4" />जीवनशैली</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>बाइपोलर डिसऑर्डर क्या है?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>बाइपोलर डिसऑर्डर एक मानसिक स्वास्थ्य स्थिति है जिसमें मैनिक और डिप्रेसिव एपिसोड होते हैं।</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>मैनिक एपिसोड</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>• अत्यधिक ऊर्जा</li>
                  <li>• नींद की जरूरत कम</li>
                  <li>• जोखिम भरा व्यवहार</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>डिप्रेसिव एपिसोड</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>• गहरी उदासी</li>
                  <li>• ऊर्जा की कमी</li>
                  <li>• आत्महत्या के विचार</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>बाइपोलर I</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>गंभीर</Badge>
                <p>पूर्ण मैनिक एपिसोड के साथ</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>बाइपोलर II</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>मध्यम</Badge>
                <p>हाइपोमेनिया + डिप्रेशन</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>जीवनशैली प्रबंधन</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>• नियमित नींद</li>
                  <li>• तनाव प्रबंधन</li>
                  <li>• शराब से परहेज</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>
                <Phone className="w-6 h-6" /> आपातकालीन सहायता
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>भारत: 112</p>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है।</p>
        </footer>
      </div>
    </div>
  );
}
