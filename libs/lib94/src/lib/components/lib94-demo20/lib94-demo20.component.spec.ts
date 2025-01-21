import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo20Component } from './lib94-demo20.component';

describe('Lib94Demo20Component', () => {
  let component: Lib94Demo20Component;
  let fixture: ComponentFixture<Lib94Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
