import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo26Component } from './lib11-demo26.component';

describe('Lib11Demo26Component', () => {
  let component: Lib11Demo26Component;
  let fixture: ComponentFixture<Lib11Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
