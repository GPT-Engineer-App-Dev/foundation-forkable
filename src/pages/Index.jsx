import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Your Bare-Bones App</CardTitle>
          <CardDescription>A minimal starting point for your web application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a simple, extensible web application built with React, React Router, and Tailwind CSS.
            It's designed to be a starting point for your projects, providing a clean structure that you can
            easily build upon.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;