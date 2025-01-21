import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo42Component } from './lib32-demo42.component';

describe('Lib32Demo42Component', () => {
  let component: Lib32Demo42Component;
  let fixture: ComponentFixture<Lib32Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
