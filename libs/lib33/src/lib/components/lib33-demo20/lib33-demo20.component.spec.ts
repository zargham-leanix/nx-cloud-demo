import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo20Component } from './lib33-demo20.component';

describe('Lib33Demo20Component', () => {
  let component: Lib33Demo20Component;
  let fixture: ComponentFixture<Lib33Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
