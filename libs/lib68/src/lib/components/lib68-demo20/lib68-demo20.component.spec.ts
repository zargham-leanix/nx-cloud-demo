import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo20Component } from './lib68-demo20.component';

describe('Lib68Demo20Component', () => {
  let component: Lib68Demo20Component;
  let fixture: ComponentFixture<Lib68Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
