import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo32Component } from './lib11-demo32.component';

describe('Lib11Demo32Component', () => {
  let component: Lib11Demo32Component;
  let fixture: ComponentFixture<Lib11Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
