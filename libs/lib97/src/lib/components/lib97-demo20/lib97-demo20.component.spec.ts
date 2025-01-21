import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo20Component } from './lib97-demo20.component';

describe('Lib97Demo20Component', () => {
  let component: Lib97Demo20Component;
  let fixture: ComponentFixture<Lib97Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
