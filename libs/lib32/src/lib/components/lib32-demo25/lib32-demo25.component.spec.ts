import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo25Component } from './lib32-demo25.component';

describe('Lib32Demo25Component', () => {
  let component: Lib32Demo25Component;
  let fixture: ComponentFixture<Lib32Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
