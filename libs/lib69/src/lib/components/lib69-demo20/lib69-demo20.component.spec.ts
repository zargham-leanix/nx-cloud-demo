import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo20Component } from './lib69-demo20.component';

describe('Lib69Demo20Component', () => {
  let component: Lib69Demo20Component;
  let fixture: ComponentFixture<Lib69Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
