import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo34Component } from './lib32-demo34.component';

describe('Lib32Demo34Component', () => {
  let component: Lib32Demo34Component;
  let fixture: ComponentFixture<Lib32Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
