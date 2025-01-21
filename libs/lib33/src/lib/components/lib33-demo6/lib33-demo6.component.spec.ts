import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo6Component } from './lib33-demo6.component';

describe('Lib33Demo6Component', () => {
  let component: Lib33Demo6Component;
  let fixture: ComponentFixture<Lib33Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
