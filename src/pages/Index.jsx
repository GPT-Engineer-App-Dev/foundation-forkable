import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto bg-green-50 dark:bg-green-900">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-800 dark:text-green-100">Welcome to Your Green-Themed App</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-300">A refreshing start for your web application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-green-700 dark:text-green-200">
            This is a simple, extensible web application built with React, React Router, and Tailwind CSS.
            It's designed to be a starting point for your projects, providing a clean structure that you can
            easily build upon. Now with a soothing green theme!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;