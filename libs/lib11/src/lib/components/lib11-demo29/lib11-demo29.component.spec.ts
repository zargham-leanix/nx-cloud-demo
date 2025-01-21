import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo29Component } from './lib11-demo29.component';

describe('Lib11Demo29Component', () => {
  let component: Lib11Demo29Component;
  let fixture: ComponentFixture<Lib11Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
