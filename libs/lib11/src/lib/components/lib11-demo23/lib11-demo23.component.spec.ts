import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo23Component } from './lib11-demo23.component';

describe('Lib11Demo23Component', () => {
  let component: Lib11Demo23Component;
  let fixture: ComponentFixture<Lib11Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
