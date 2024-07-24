import { provideHttpClient, withFetch } from "@angular/common/http";
// biome-ignore lint/style/useImportType: <explanation>
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(),
		provideHttpClient(withFetch()),
	],
};
