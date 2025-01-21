import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo33Component } from './lib11-demo33.component';

describe('Lib11Demo33Component', () => {
  let component: Lib11Demo33Component;
  let fixture: ComponentFixture<Lib11Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
