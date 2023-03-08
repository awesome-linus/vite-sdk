export default {
	build: {
	  outDir: 'dist',
	  lib: {
        entry: 'src/index.ts',
        name: 'index',
	  },
	  rollupOptions: {
		output: {
		  entryFileNames: `[name].js`,
		  chunkFileNames: `[name].js`,
		  assetFileNames: `[name].[ext]`,
		},
	  },
	}
  }
