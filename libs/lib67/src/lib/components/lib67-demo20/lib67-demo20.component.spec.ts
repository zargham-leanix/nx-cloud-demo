import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo20Component } from './lib67-demo20.component';

describe('Lib67Demo20Component', () => {
  let component: Lib67Demo20Component;
  let fixture: ComponentFixture<Lib67Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
