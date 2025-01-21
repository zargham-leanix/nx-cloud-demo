import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo33Component } from './lib23-demo33.component';

describe('Lib23Demo33Component', () => {
  let component: Lib23Demo33Component;
  let fixture: ComponentFixture<Lib23Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
