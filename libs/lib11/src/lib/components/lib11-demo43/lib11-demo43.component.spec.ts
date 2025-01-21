import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo43Component } from './lib11-demo43.component';

describe('Lib11Demo43Component', () => {
  let component: Lib11Demo43Component;
  let fixture: ComponentFixture<Lib11Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
