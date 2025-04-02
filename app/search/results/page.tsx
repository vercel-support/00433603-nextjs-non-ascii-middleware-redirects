export default async function SearchResultsPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const query = (await searchParams).q;
	return <div>Search Results for {query}</div>;
}
