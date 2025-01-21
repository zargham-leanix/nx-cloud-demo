import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo20Component } from './lib11-demo20.component';

describe('Lib11Demo20Component', () => {
  let component: Lib11Demo20Component;
  let fixture: ComponentFixture<Lib11Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
