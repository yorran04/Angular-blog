import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMask, faSpinner } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {constructor(library: FaIconLibrary) {
  library.addIcons(faMask, faSpinner);
} }
