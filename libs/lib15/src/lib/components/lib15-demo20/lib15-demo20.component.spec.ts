import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo20Component } from './lib15-demo20.component';

describe('Lib15Demo20Component', () => {
  let component: Lib15Demo20Component;
  let fixture: ComponentFixture<Lib15Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
