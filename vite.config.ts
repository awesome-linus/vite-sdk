export default {
	build: {
	  outDir: 'dist',
	  rollupOptions: {
		output: {
		  entryFileNames: `[name].js`,
		  chunkFileNames: `[name].js`,
		  assetFileNames: `[name].[ext]`,
		},
	  },
	}
  }
