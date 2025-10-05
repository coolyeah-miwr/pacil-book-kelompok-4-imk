import React from 'react';
import { Book } from '../types';
import BookCarousel from './BookCarousel';
import { useLocalization } from '../contexts/LocalizationContext';

interface RakViewProps {
  recommendedBooks: Book[];
  newBooks: Book[];
  lastReadBooks: Book[];
  onSelectBook: (book: Book) => void;
  onAddToBag: (book: Book) => void;
  onDownload: (book: Book) => void;
}

const RakView: React.FC<RakViewProps> = ({ recommendedBooks, newBooks, lastReadBooks, onSelectBook, onAddToBag, onDownload }) => {
    const { t } = useLocalization();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
            <BookCarousel 
                title={t('rak_recommendations')} 
                subtitle={t('rak_recommendations_subtitle')}
                books={recommendedBooks} 
                onSelectBook={onSelectBook}
                onAddToBag={onAddToBag}
                onDownload={onDownload}
            />
            <BookCarousel 
                title={t('rak_newly_added')} 
                subtitle={t('rak_newly_added_subtitle')}
                books={newBooks}
                onSelectBook={onSelectBook}
                onAddToBag={onAddToBag}
                onDownload={onDownload}
            />
            <BookCarousel 
                title={t('rak_last_read')} 
                subtitle={t('rak_last_read_subtitle')}
                books={lastReadBooks} 
                onSelectBook={onSelectBook}
                onAddToBag={onAddToBag}
                onDownload={onDownload}
            />
        </div>
    );
};

export default RakView;
