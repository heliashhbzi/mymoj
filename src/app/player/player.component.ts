import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AudioService } from './player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  isOpenDropDown: boolean = false;
  isPlaying = false;


  selectedMusicIndex = 0;
  musicList = [
    {
      img: '/assets/donya.jpg',
      name: 'Donya',
      artist: 'Habib',
      music: '/assets/music/Habib - Donya (320).mp3'

    },
    {
      img: '/assets/road61.png',
      name: 'Road61',
      artist: 'Papaboyz',
      music: '/assets/music/papaboyz_x_tamara_-_road_61.mp3'

    },
    {
      img: '/assets/zemeston.jpg',
      name: 'Zemestoon',
      artist: 'Hooman',
      music: '/assets/music/Hoomaan - Zemeston (320).mp3'
    },
    {
      img: 'https://musics-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365-150x150.jpg',
      name: 'Amad Bahar Janha',
      artist: 'Mohsen Chavoshi',
      music: 'https://dls.musics-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3'
    },
    {
      img: 'https://musics-fa.com/wp-content/uploads/2024/05/Majid-Razavi-Music-fa.com_-150x150.jpeg',
      name: 'Setareh',
      artist: 'Majid Razavi',
      music: 'https://dls.musics-fa.com/song/alibz/1403/Majid%20Razavi%20-%20Setare%20(320).mp3'
    },
    {
      img: 'https://musics-fa.com/wp-content/uploads/2024/09/Sam-El-Co-Ye-Gol-150x150.jpg',
      name: 'Khoda dade be man ye gol',
      artist: 'Sam Alkoo',
      music: 'https://dls.musics-fa.com/song/alibz/1403/Sam%20El%20Co%20-%20Ye%20Gol%20(320).mp3'
    }
  ];

  constructor(public audioService: AudioService) {
    // Load some example tracks
    this.audioService.loadTracks(this.musicList.map(track => track.music));
  }

  ngOnInit() {
    // Update the slider value periodically
    setInterval(() => {
      // Update the slider value only if the audio is playing
      if (this.audioService.isPlaying()) {
        // Trigger change detection if necessary
      }
    }, 1000); // Update every second
  }

  nextTrack(): void {
    if (this.selectedMusicIndex == this.musicList.length - 1) {
      this.selectedMusicIndex = 0;
    }
    else {
      this.selectedMusicIndex++;
    }
    this.next();
  }

  prevTrack(): void {
    if (this.selectedMusicIndex == 0) {
      this.selectedMusicIndex = this.musicList.length - 1;
    }
    else {
      this.selectedMusicIndex--;
    }
    this.previous();
  }

  randomTrack(): void {
    this.audioService.toggleRandomTrack();
  }

  playPauseTrack(): void {
    if (this.isPlaying) {
      this.pause();
      this.isPlaying = false;
    }
    else {
      this.play();
      this.isPlaying = true;
    }
  }

  repeatTrack(): void {
    this.audioService.toggleRepeat();
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  next() {
    this.audioService.next();
  }

  previous() {
    this.audioService.previous();
  }


  toggleRepeat() {
    this.audioService.toggleRepeat(); // Toggle repeat mode
  }


  // Handle volume change from slider
  onVolumeChange(event: Event): void {
    const slider = event.target as HTMLInputElement;
    const volume = parseInt(slider.value, 10);
    this.audioService.setVolume(volume); // Set the volume in the audio service
  }
  // Handle seeking
  onSeekChange(event: Event): void {
    const slider = event.target as HTMLInputElement;
    const seekTime = parseFloat(slider.value);
    this.audioService.seekTo(seekTime);
  }

  // Format time in minutes:seconds
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  public toggleDropDown(): void {
    this.isOpenDropDown = !this.isOpenDropDown;
  }

  resetCurrentTime() {
    this.audioService.resetCurrentTime();
  }
}

