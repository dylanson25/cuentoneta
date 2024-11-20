import { Component, inject, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { MediaTag, MediaTypeKey, MediaTypeTitles } from '@models/media.model';

const mediaTgs: MediaTypeTitles = {
	spaceRecording: {
		text: 'Contiene narraciones en audio',
		src: 'assets/svg/waveform.svg',
	},
	audioRecording: {
		text: 'Contiene grabaciones de Spaces de X',
		src: 'assets/svg/twitter.svg',
	},
	youTubeVideo: {
		text: 'Contiene videos de YouTube',
		src: 'assets/svg/video.svg',
	},
};

@Component({
	selector: 'cuentoneta-media-resource-tag',
	standalone: true,
	hostDirectives: [TooltipDirective],
	imports: [CommonModule],
	template: ` <div [class]="size()" class="flex items-center justify-center">
		<img [alt]="mediaTag.text" [src]="mediaTag.src" />
	</div>`,
	styles: `
		.md {
			@apply h-6 w-6;
		}

		.lg {
			@apply h-8 w-8;
		}
	`,
})
export class MediaResourceTagComponent implements OnInit {
	mediaresourcetype = input<MediaTypeKey>('audioRecording');
	size = input<'md' | 'lg'>('md');
	mediaTag: MediaTag = mediaTgs[this.mediaresourcetype()];

	private tooltipDirective = inject(TooltipDirective);

	ngOnInit() {
		this.tooltipDirective.text.set(this.mediaTag.text);
		this.tooltipDirective.position.set('top');
	}
}
