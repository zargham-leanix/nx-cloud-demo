import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo6Component } from './lib85-demo6.component';

describe('Lib85Demo6Component', () => {
  let component: Lib85Demo6Component;
  let fixture: ComponentFixture<Lib85Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
