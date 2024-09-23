// audio.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private trackList: string[] = [];
  private currentTrackIndex: number = -1;
  private randomTrackMode = false;
  private repeat: boolean = false; // Track repeat state

  constructor() {
    this.audio = new Audio();
    // Add an event listener for the ended event
    this.audio.addEventListener('ended', () => {
      if (this.repeat) {
        this.audio.currentTime = 0; // Reset to the beginning
        this.play(); // Replay the track
      }
    });
  }

  // Load the track list
  loadTracks(tracks: string[]): void {
    this.trackList = tracks;
    this.currentTrackIndex = 0; // Start from the first track
    this.audio.src = this.trackList[this.currentTrackIndex];
  }

  // Play the current track
  play(): void {
    if (this.currentTrackIndex >= 0 && this.currentTrackIndex < this.trackList.length) {
      this.audio.play();
    }
  }

  // Pause the current track
  pause(): void {
    this.audio.pause();
  }

  // Toggle repeat mode
  toggleRepeat(): void {
    this.repeat = !this.repeat;
  }

  toggleRandomTrack(): void {
    this.randomTrackMode = !this.randomTrackMode;
  }


  // Play the next track
  next(): void {
    if (this.randomTrackMode) {
      this.randomTrack();
    }
    else {
      if (this.currentTrackIndex < this.trackList.length - 1) {
        this.currentTrackIndex++;
        this.audio.src = this.trackList[this.currentTrackIndex];
        this.play();
      }
    }

  }

  // Check if repeat is enabled
  isRepeatEnabled(): boolean {
    return this.repeat;
  }

  randomTrack(): void {
    let randomTrackIndex = Math.floor(Math.random() * this.trackList.length);
    if (this.currentTrackIndex == randomTrackIndex) {
      randomTrackIndex = (Math.random() + 1) * this.trackList.length - 1;
    }
    this.currentTrackIndex = randomTrackIndex;
    this.audio.src = this.trackList[this.currentTrackIndex];
    this.play();
  }

  // Play the previous track
  previous(): void {
    if (this.randomTrackMode) {
      this.randomTrack();
    }
    else {
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
        this.audio.src = this.trackList[this.currentTrackIndex];
        this.play();
      }
    }
  }

  seekTo(seconds: number): void {
    this.audio.currentTime = seconds; // Set the current time of the audio
  }

  // Get the current track index
  getCurrentTrackIndex(): number {
    return this.currentTrackIndex;
  }

  // Get the current track name
  getCurrentTrack(): string {
    return this.trackList[this.currentTrackIndex];
  }

  // Check if audio is playing
  isPlaying(): boolean {
    return !this.audio.paused;
  }

  // Set the volume to a low level
  setLowVolume(): void {
    this.audio.volume = 0.2; // Set the volume to 20%
  }

  // Set the volume to a high level
  setHighVolume(): void {
    this.audio.volume = 1; // Set the volume to 100%
  }

  // Set the volume based on the slider value (0-100)
  setVolume(value: number): void {
    this.audio.volume = value / 100; // Convert to a range of 0.0 to 1.0
  }

  // Get the current track duration
  getDuration(): number {
    return this.audio.duration; // Returns the duration in seconds
  }

  // Get the current playback time
  getCurrentTime(): number {
    return this.audio.currentTime; // Returns current playback time in seconds
  }

  // Reset the current time to 0
  resetCurrentTime(): void {
    this.audio.currentTime = 0; // Reset the current time to the beginning
  }

  // Other methods for next, previous, etc.

}