import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface ButtonConfig {
  label: string;
  icon?: string;
  variant: 'primary' | 'secondary' | 'warning' | 'outlined';
  disabled?: boolean;
  loading?: boolean;
}

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, NgIf],
  template: `
    <button mat-button [disabled]="config.disabled || config.loading">
      <mat-icon *ngIf="config.icon && !config.loading">{{
        config.icon
      }}</mat-icon>
      <mat-spinner *ngIf="config.loading" diameter="20"></mat-spinner>
      {{ config.label }}
    </button>
    <!--
          [ngClass]="config.variant"
      (click)="onClick.emit($event)"
    -->
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .primary {
        background-color: #1976d2;
        color: white;
      }

      .secondary {
        background-color: #424242;
        color: white;
      }

      .warning {
        background-color: #f44336;
        color: white;
      }

      .outlined {
        border: 1px solid #1976d2;
        color: #1976d2;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() config!: ButtonConfig;
}
