import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo33Component } from './lib79-demo33.component';

describe('Lib79Demo33Component', () => {
  let component: Lib79Demo33Component;
  let fixture: ComponentFixture<Lib79Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
