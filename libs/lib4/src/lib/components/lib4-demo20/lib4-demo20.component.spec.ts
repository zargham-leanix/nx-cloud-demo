import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo20Component } from './lib4-demo20.component';

describe('Lib4Demo20Component', () => {
  let component: Lib4Demo20Component;
  let fixture: ComponentFixture<Lib4Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
