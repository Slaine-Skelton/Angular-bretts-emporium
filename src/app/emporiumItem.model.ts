import { AvatarImageComponent } from './avatar-image/avatar-image.component';
import { LibraryNameComponent } from './library-name/library-name.component';
import { RatingComponent } from './rating/rating.component';

/**
* Provides a emporium item
*/
export class EmporiumItem {
    constructor(
        public userID: string,
        public avatar: string,
        public libraryName: string,
        public size: number,
        public rating: number) {
    }
}