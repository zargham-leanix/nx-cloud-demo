import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo8Component } from './lib32-demo8.component';

describe('Lib32Demo8Component', () => {
  let component: Lib32Demo8Component;
  let fixture: ComponentFixture<Lib32Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
