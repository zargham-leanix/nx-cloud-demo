import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo41Component } from './lib11-demo41.component';

describe('Lib11Demo41Component', () => {
  let component: Lib11Demo41Component;
  let fixture: ComponentFixture<Lib11Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
