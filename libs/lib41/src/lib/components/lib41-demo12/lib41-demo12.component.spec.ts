import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo12Component } from './lib41-demo12.component';

describe('Lib41Demo12Component', () => {
  let component: Lib41Demo12Component;
  let fixture: ComponentFixture<Lib41Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
