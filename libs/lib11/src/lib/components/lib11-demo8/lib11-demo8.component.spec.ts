import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo8Component } from './lib11-demo8.component';

describe('Lib11Demo8Component', () => {
  let component: Lib11Demo8Component;
  let fixture: ComponentFixture<Lib11Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
