import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo20Component } from './lib51-demo20.component';

describe('Lib51Demo20Component', () => {
  let component: Lib51Demo20Component;
  let fixture: ComponentFixture<Lib51Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
