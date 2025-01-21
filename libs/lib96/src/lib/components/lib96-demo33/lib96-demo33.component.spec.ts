import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo33Component } from './lib96-demo33.component';

describe('Lib96Demo33Component', () => {
  let component: Lib96Demo33Component;
  let fixture: ComponentFixture<Lib96Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
