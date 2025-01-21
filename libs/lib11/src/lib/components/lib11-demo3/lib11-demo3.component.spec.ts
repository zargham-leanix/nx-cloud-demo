import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo3Component } from './lib11-demo3.component';

describe('Lib11Demo3Component', () => {
  let component: Lib11Demo3Component;
  let fixture: ComponentFixture<Lib11Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
