import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo20Component } from './lib98-demo20.component';

describe('Lib98Demo20Component', () => {
  let component: Lib98Demo20Component;
  let fixture: ComponentFixture<Lib98Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
