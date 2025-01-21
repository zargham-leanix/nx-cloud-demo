import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo20Component } from './lib8-demo20.component';

describe('Lib8Demo20Component', () => {
  let component: Lib8Demo20Component;
  let fixture: ComponentFixture<Lib8Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
