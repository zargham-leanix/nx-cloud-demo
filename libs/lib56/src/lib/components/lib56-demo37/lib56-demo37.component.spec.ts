import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo37Component } from './lib56-demo37.component';

describe('Lib56Demo37Component', () => {
  let component: Lib56Demo37Component;
  let fixture: ComponentFixture<Lib56Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
