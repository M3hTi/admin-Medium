import { useNavigate, useParams } from "react-router-dom";
import { useArticles } from "./useArticles";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Spinner from "../../ui/Spinner";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns/fp";

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  //   console.log("🔍 DEBUG: Id of article is:", id);
  //   console.log("🔍 DEBUG: typeof Id of article is:", typeof id);

  const { articles: article, isLoading } = useArticles(id);

  console.log("🔍 DEBUG: My article is:", article);

  const { title, content, tags, created_at } = article || {};

  const publishDate = created_at
    ? formatDistance(parseISO(created_at), new Date(), { addSuffix: true })
    : null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <article className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
              {publishDate}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 border border-gray-300 rounded-full bg-gray-50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-gray max-w-none">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Headers
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">
                  {children}
                </h3>
              ),
              // Paragraphs
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
              ),
              // Lists
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              // Links
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                >
                  {children}
                </a>
              ),
              // Blockquotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  {children}
                </blockquote>
              ),
              // Tables
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-50">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                  {children}
                </td>
              ),
              // Inline code
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="mb-4 rounded-lg border border-gray-200 overflow-hidden">
                    <SyntaxHighlighter
                      {...props}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={dark}
                      customStyle={{
                        margin: 0,
                        borderRadius: 0,
                      }}
                    />
                  </div>
                ) : (
                  <code
                    {...props}
                    className="px-1.5 py-0.5 bg-gray-100 text-gray-900 rounded text-sm font-mono border border-gray-200"
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </article>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
        >
          
          &larr; Back to Articles
        </button>
      </div>
    </>
  );
}

export default ArticleDetail;
