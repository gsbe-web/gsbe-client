import { Spinner } from "components/shared";

interface Properties {
	error?: Error;
}

export function LoadingOrError({ error }: Properties) {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<h1 className="text-xl">
				{error?.message ?? <Spinner isLoading={true} />}
			</h1>
		</div>
	);
}
