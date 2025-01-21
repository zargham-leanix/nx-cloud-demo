import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo33Component } from './lib51-demo33.component';

describe('Lib51Demo33Component', () => {
  let component: Lib51Demo33Component;
  let fixture: ComponentFixture<Lib51Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
