## Interface d'administration du site du Tennis d'Arsac

Basé sur le template [Material-kit-react](https://github.com/devias-io/material-kit-react)

## Quick start

- Make sure your Node.js and npm versions are up-to-date
- Install dependencies: `npm install` or `yarn`
- Install pnpm `npm install -g pnpm`
- Start the server: `npm run dev` or `yarn dev`
- Open browser: `http://localhost:3000`


## File Structure

Within the download you'll find the following directories and files:

```
┌── .editorconfig
├── .eslintrc.js
├── .gitignore
├── CHANGELOG.md
├── LICENSE.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
├── public
└── src
	├── components
	├── contexts
	├── hooks
	├── lib
	├── styles
	├── types
	└── app
		├── layout.tsx
		├── page.tsx
		├── auth
		└── dashboard
```

## Icon
La librairie [phosphoricons](https://phosphoricons.com/) est utilisée

## Debug

S'il y a une erreur au lancement de l'application, c'est qu'il n'y a pas assez de watcher sur la machine linux:

```
Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, watch '/home'
```

Suivre les [instructions](https://stackoverflow.com/a/55763478)
