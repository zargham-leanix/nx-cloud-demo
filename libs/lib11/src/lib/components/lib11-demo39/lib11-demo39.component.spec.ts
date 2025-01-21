import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo39Component } from './lib11-demo39.component';

describe('Lib11Demo39Component', () => {
  let component: Lib11Demo39Component;
  let fixture: ComponentFixture<Lib11Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
