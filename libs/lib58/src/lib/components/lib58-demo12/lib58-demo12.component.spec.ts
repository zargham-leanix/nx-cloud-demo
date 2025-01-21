import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo12Component } from './lib58-demo12.component';

describe('Lib58Demo12Component', () => {
  let component: Lib58Demo12Component;
  let fixture: ComponentFixture<Lib58Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
