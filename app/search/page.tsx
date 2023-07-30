import SearchResults from '@/components/search-results';

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.q;

  return {
    title: query + ' - ' + 'Google News Search',
  };
}

export default function SearchNews({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.q;

  return (
    <main className='py-10'>
      <SearchResults query={query} />
    </main>
  );
}
