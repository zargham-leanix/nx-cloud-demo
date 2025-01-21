import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo20Component } from './lib2-demo20.component';

describe('Lib2Demo20Component', () => {
  let component: Lib2Demo20Component;
  let fixture: ComponentFixture<Lib2Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
