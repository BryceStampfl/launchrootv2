import { render, screen } from '@/test-utils';
import { FeaturesCards } from './index';

describe('FeaturesCards component', () => {
  it('renders the main title', () => {
    render(<FeaturesCards />);
    expect(
      screen.getByText('Integrate effortlessly with any technology stack')
    ).toBeInTheDocument();
  });

  it('renders all feature card titles', () => {
    render(<FeaturesCards />);
    expect(screen.getByText('Web Design')).toBeInTheDocument();
    expect(screen.getByText('Cloud Hosting')).toBeInTheDocument();
    expect(screen.getByText('Business Solutions')).toBeInTheDocument();
  });

  it('renders all feature descriptions', () => {
    render(<FeaturesCards />);
    expect(
      screen.getByText(
        /This dust is actually a powerful poison that will even make a pro wrestler sick/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /People say it can run at the same speed as lightning striking/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /They’re popular, but they’re rare. Trainers who show them off recklessly/i
      )
    ).toBeInTheDocument();
  });
});
