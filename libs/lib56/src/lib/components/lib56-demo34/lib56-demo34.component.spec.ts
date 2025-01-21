import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo34Component } from './lib56-demo34.component';

describe('Lib56Demo34Component', () => {
  let component: Lib56Demo34Component;
  let fixture: ComponentFixture<Lib56Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
