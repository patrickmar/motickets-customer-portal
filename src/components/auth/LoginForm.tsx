import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Eye, EyeOff, Mail, Lock, Chrome, Apple, Facebook } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
  onForgotPassword: () => void;
}

export function LoginForm({ onLogin, onSwitchToSignup, onForgotPassword }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <Card className="w-full max-w-md mx-auto motickets-shadow">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">Welcome Back</CardTitle>
        <CardDescription>Sign in to your MoTickets account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full motickets-gradient">
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={onForgotPassword}
            className="text-sm text-primary hover:underline"
          >
            Forgot your password?
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="w-full">
            <Chrome className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full">
            <Apple className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full">
            <Facebook className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center text-sm">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-primary hover:underline font-medium"
          >
            Create Account
          </button>
        </div>
      </CardContent>
    </Card>
  );
}