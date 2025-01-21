import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo33Component } from './lib38-demo33.component';

describe('Lib38Demo33Component', () => {
  let component: Lib38Demo33Component;
  let fixture: ComponentFixture<Lib38Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
