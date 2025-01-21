import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo20Component } from './lib13-demo20.component';

describe('Lib13Demo20Component', () => {
  let component: Lib13Demo20Component;
  let fixture: ComponentFixture<Lib13Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
