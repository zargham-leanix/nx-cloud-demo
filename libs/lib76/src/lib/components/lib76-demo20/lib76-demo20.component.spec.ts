import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo20Component } from './lib76-demo20.component';

describe('Lib76Demo20Component', () => {
  let component: Lib76Demo20Component;
  let fixture: ComponentFixture<Lib76Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
