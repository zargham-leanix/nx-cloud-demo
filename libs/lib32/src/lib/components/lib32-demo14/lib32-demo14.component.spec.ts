import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo14Component } from './lib32-demo14.component';

describe('Lib32Demo14Component', () => {
  let component: Lib32Demo14Component;
  let fixture: ComponentFixture<Lib32Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
