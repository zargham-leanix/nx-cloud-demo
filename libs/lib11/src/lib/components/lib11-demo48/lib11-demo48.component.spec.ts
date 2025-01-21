import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo48Component } from './lib11-demo48.component';

describe('Lib11Demo48Component', () => {
  let component: Lib11Demo48Component;
  let fixture: ComponentFixture<Lib11Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
