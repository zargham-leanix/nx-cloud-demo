import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo20Component } from './lib78-demo20.component';

describe('Lib78Demo20Component', () => {
  let component: Lib78Demo20Component;
  let fixture: ComponentFixture<Lib78Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
