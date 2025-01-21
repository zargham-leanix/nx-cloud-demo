import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo2Component } from './lib11-demo2.component';

describe('Lib11Demo2Component', () => {
  let component: Lib11Demo2Component;
  let fixture: ComponentFixture<Lib11Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
