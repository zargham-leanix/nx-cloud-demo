import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo33Component } from './lib69-demo33.component';

describe('Lib69Demo33Component', () => {
  let component: Lib69Demo33Component;
  let fixture: ComponentFixture<Lib69Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
