import { redirect } from "next/navigation";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	redirect(
		`/search/results?q=${encodeURIComponent((await searchParams).q as string)}`,
	);
}
