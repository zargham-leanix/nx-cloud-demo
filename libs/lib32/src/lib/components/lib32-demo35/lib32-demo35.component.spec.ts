import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo35Component } from './lib32-demo35.component';

describe('Lib32Demo35Component', () => {
  let component: Lib32Demo35Component;
  let fixture: ComponentFixture<Lib32Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
