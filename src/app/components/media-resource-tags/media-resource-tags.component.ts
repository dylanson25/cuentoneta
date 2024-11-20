import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Media } from '@models/media.model';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { MediaResourceTagComponent } from '../media-resource-tag/media-resource-tag.component';

@Component({
	selector: 'cuentoneta-media-resource-tags',
	standalone: true,
	hostDirectives: [TooltipDirective],
	imports: [CommonModule, MediaResourceTagComponent],
	template: ` @for (mediaResource of resources(); track $index) {
		<cuentoneta-media-resource-tag [mediaresourcetype]="mediaResource.type" [size]="size()" />
	}`,
})
export class MediaResourceTagsComponent {
	resources = input<Media[]>([]);
	size = input<'md' | 'lg'>('md');
}
