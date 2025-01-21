import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo43Component } from './lib32-demo43.component';

describe('Lib32Demo43Component', () => {
  let component: Lib32Demo43Component;
  let fixture: ComponentFixture<Lib32Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
