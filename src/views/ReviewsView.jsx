import React from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { ReviewsHeader } from '../components/reviews/ReviewsHeader';
import { ReviewsTabs } from '../components/reviews/ReviewsTabs';
import { ReviewsFilters } from '../components/reviews/ReviewsFilters';
import { ReviewList } from '../components/reviews/ReviewList';
import { ReviewsRightPanel } from '../components/reviews/ReviewsRightPanel';

export const ReviewsView = () => {
  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <ReviewsHeader />
          <ReviewsTabs />
          <ReviewsFilters />
          <ReviewList />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ReviewsRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};
