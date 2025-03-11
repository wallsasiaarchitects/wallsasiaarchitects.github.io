
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  slug: string;
  readTime: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  date,
  imageSrc,
  slug,
  readTime
}) => {
  return (
    <article className="article-card h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/blog/${slug}`} className="block h-full">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover animate-image-fade" 
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-medium mb-2 text-architect-dark transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-4 text-sm">
            {excerpt}
          </p>
          <span className="text-architect-accent font-medium text-sm hover:underline inline-flex items-center">
            Read Article
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
