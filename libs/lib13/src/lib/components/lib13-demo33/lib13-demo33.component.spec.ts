import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo33Component } from './lib13-demo33.component';

describe('Lib13Demo33Component', () => {
  let component: Lib13Demo33Component;
  let fixture: ComponentFixture<Lib13Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
