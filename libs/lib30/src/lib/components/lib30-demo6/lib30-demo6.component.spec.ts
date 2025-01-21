import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo6Component } from './lib30-demo6.component';

describe('Lib30Demo6Component', () => {
  let component: Lib30Demo6Component;
  let fixture: ComponentFixture<Lib30Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
