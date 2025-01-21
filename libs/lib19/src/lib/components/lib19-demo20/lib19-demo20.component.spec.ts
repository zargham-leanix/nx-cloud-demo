import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo20Component } from './lib19-demo20.component';

describe('Lib19Demo20Component', () => {
  let component: Lib19Demo20Component;
  let fixture: ComponentFixture<Lib19Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
