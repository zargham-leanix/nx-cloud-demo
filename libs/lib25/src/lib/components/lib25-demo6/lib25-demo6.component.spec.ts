import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo6Component } from './lib25-demo6.component';

describe('Lib25Demo6Component', () => {
  let component: Lib25Demo6Component;
  let fixture: ComponentFixture<Lib25Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
