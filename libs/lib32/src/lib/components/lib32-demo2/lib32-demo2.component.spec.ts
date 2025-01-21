import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo2Component } from './lib32-demo2.component';

describe('Lib32Demo2Component', () => {
  let component: Lib32Demo2Component;
  let fixture: ComponentFixture<Lib32Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
