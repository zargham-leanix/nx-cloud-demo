import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo17Component } from './lib11-demo17.component';

describe('Lib11Demo17Component', () => {
  let component: Lib11Demo17Component;
  let fixture: ComponentFixture<Lib11Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
