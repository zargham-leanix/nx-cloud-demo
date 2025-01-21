import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo0Component } from './lib11-demo0.component';

describe('Lib11Demo0Component', () => {
  let component: Lib11Demo0Component;
  let fixture: ComponentFixture<Lib11Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
