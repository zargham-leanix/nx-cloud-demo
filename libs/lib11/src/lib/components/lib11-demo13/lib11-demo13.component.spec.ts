import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo13Component } from './lib11-demo13.component';

describe('Lib11Demo13Component', () => {
  let component: Lib11Demo13Component;
  let fixture: ComponentFixture<Lib11Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
