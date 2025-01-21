import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo14Component } from './lib11-demo14.component';

describe('Lib11Demo14Component', () => {
  let component: Lib11Demo14Component;
  let fixture: ComponentFixture<Lib11Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
