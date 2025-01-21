import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo20Component } from './lib79-demo20.component';

describe('Lib79Demo20Component', () => {
  let component: Lib79Demo20Component;
  let fixture: ComponentFixture<Lib79Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
