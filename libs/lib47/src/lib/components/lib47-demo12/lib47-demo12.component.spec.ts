import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo12Component } from './lib47-demo12.component';

describe('Lib47Demo12Component', () => {
  let component: Lib47Demo12Component;
  let fixture: ComponentFixture<Lib47Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
