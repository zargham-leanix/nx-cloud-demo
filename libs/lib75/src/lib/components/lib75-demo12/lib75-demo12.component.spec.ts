import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo12Component } from './lib75-demo12.component';

describe('Lib75Demo12Component', () => {
  let component: Lib75Demo12Component;
  let fixture: ComponentFixture<Lib75Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
