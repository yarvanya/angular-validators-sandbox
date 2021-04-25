import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';
import {ReleaseNotes} from '../constants/release-notes.constant';
import {ReleaseNoteInterface} from '../interfaces/release-note.interface';

@Component({
  selector: 'app-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss']
})

export class ReleaseNotesComponent implements OnInit {
  public releaseNotes: ReleaseNoteInterface[] = ReleaseNotes;
  public versionFormControl: FormControl = new FormControl(this.releaseNotes[this.releaseNotes.length - 1].version);
  public notes: string[] = this.releaseNotes[this.releaseNotes.length - 1].notes;

  constructor() {}

  public ngOnInit(): void {}

  public onVersionChange(event: MatSelectChange): void {
    const selectedVersion: string = event.value;
    this.notes = this.releaseNotes.find(release_note => release_note.version === selectedVersion).notes;
  }
}
