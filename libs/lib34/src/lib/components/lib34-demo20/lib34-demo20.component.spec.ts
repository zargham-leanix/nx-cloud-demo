import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo20Component } from './lib34-demo20.component';

describe('Lib34Demo20Component', () => {
  let component: Lib34Demo20Component;
  let fixture: ComponentFixture<Lib34Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
