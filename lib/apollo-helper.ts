export function offsetLimitPaginatedField<T>() {
	return {
		merge(existing: T[] | undefined, incoming: T[], { args }: any) {
			const merged = existing ? existing.slice(0) : [];
			for (let i = args.offset; i < args.offset + args.limit; ++i) {
				merged[i] = incoming[i - args.offset];
			}
			return merged;
		},
		read(existing: T[] | undefined, { args }: any) {
			return existing && existing.slice(args.offset, args.offset + args.limit);
		}
	};
}
// https://slides.com/benjamn/fine-tuning-apollo-client-caching#/11/22
