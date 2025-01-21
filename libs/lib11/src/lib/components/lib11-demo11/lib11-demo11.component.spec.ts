import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo11Component } from './lib11-demo11.component';

describe('Lib11Demo11Component', () => {
  let component: Lib11Demo11Component;
  let fixture: ComponentFixture<Lib11Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
