import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo33Component } from './lib91-demo33.component';

describe('Lib91Demo33Component', () => {
  let component: Lib91Demo33Component;
  let fixture: ComponentFixture<Lib91Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
