import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo33Component } from './lib9-demo33.component';

describe('Lib9Demo33Component', () => {
  let component: Lib9Demo33Component;
  let fixture: ComponentFixture<Lib9Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
