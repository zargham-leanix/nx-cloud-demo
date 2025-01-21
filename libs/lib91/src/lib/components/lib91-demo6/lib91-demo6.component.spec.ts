import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo6Component } from './lib91-demo6.component';

describe('Lib91Demo6Component', () => {
  let component: Lib91Demo6Component;
  let fixture: ComponentFixture<Lib91Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
