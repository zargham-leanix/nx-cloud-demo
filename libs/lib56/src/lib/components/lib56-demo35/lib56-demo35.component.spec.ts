import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo35Component } from './lib56-demo35.component';

describe('Lib56Demo35Component', () => {
  let component: Lib56Demo35Component;
  let fixture: ComponentFixture<Lib56Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
