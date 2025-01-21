import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo7Component } from './lib11-demo7.component';

describe('Lib11Demo7Component', () => {
  let component: Lib11Demo7Component;
  let fixture: ComponentFixture<Lib11Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
