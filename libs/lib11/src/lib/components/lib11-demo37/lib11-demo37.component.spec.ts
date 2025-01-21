import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo37Component } from './lib11-demo37.component';

describe('Lib11Demo37Component', () => {
  let component: Lib11Demo37Component;
  let fixture: ComponentFixture<Lib11Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
