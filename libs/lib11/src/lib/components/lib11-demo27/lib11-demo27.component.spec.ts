import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo27Component } from './lib11-demo27.component';

describe('Lib11Demo27Component', () => {
  let component: Lib11Demo27Component;
  let fixture: ComponentFixture<Lib11Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
