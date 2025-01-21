import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo33Component } from './lib45-demo33.component';

describe('Lib45Demo33Component', () => {
  let component: Lib45Demo33Component;
  let fixture: ComponentFixture<Lib45Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
