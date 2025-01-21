import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo20Component } from './lib46-demo20.component';

describe('Lib46Demo20Component', () => {
  let component: Lib46Demo20Component;
  let fixture: ComponentFixture<Lib46Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
