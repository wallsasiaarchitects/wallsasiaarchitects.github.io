
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  slug: string;
  readTime: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  excerpt,
  date,
  imageSrc,
  slug,
  readTime
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <div className="h-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover animate-image-fade"
          />
        </div>
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="text-architect-accent font-medium mr-3">Featured</span>
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-architect-dark">
          {title}
        </h2>
        <p className="text-gray-600 mb-6">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300 w-fit"
        >
          Read Article
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default FeaturedArticle;
