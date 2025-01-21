import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo4Component } from './lib11-demo4.component';

describe('Lib11Demo4Component', () => {
  let component: Lib11Demo4Component;
  let fixture: ComponentFixture<Lib11Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
