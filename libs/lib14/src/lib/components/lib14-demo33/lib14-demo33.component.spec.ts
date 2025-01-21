import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo33Component } from './lib14-demo33.component';

describe('Lib14Demo33Component', () => {
  let component: Lib14Demo33Component;
  let fixture: ComponentFixture<Lib14Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
