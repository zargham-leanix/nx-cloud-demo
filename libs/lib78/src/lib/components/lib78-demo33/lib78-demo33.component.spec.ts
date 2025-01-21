import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo33Component } from './lib78-demo33.component';

describe('Lib78Demo33Component', () => {
  let component: Lib78Demo33Component;
  let fixture: ComponentFixture<Lib78Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
