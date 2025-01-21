import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo29Component } from './lib32-demo29.component';

describe('Lib32Demo29Component', () => {
  let component: Lib32Demo29Component;
  let fixture: ComponentFixture<Lib32Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
