import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo25Component } from './lib11-demo25.component';

describe('Lib11Demo25Component', () => {
  let component: Lib11Demo25Component;
  let fixture: ComponentFixture<Lib11Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
