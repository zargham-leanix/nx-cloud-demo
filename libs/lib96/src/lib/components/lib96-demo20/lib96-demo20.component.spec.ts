import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo20Component } from './lib96-demo20.component';

describe('Lib96Demo20Component', () => {
  let component: Lib96Demo20Component;
  let fixture: ComponentFixture<Lib96Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
