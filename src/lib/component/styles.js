export const styles = {
	xsmall: ['px-10', 'py-12'],
	small: ['px-20', 'py-24'],
	large: ['px-40', 'py-48']
};

export const sizes = (sizes) => {
	// Generate tailwind safelist here - how do we register new styles to the project safelist?
	// Safelist could look like a comment with: "px-10 py-12 sm:px-20 sm:py-24 max-[600px]:px-40 max-[600px]:py-48"
	return sizes; // Could be {base:"xsmall", sm:"small", "max-[600px]":"large"}
};
